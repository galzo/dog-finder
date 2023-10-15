import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";
import { QueryPaylad } from "./payload.types";

const API_URL = process.env.REACT_APP_API_URL || "";

const build_endpoint = (path: string) => {
  return `${API_URL}${path}`
}

class ServerApi {
  constructor(private token: string, private baseUrl: string) {}

  async fetch(
    url: RequestInfo,
    init?: Omit<RequestInit, "signal"> & { timeoutMs?: number }
  ) {
    const token = this.token;

    let signal;
    let abortTimeout;
    if (init?.timeoutMs) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => controller.abort(), init.timeoutMs);
      signal = controller.signal;
    }

    const response = await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: `Bearer ${token}`,
      },
      signal,
    });

    if (abortTimeout) clearTimeout(abortTimeout);
    return response;
  }

  // enter endpoint
  async query(payload: QueryPaylad) {
    let url = build_endpoint("/dogfinder/query/");
    let requestObj = {
      body: JSON.stringify(payload), 
      method: "POST"
    }

    return this.fetch(url, requestObj);
  }
}

export const useGetServerApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  return useCallback(
    async () => new ServerApi(await getAccessTokenSilently(), API_URL),
    [getAccessTokenSilently]
  );
};

export default ServerApi;

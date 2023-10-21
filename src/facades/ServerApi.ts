import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";
import { DogType, QueryPayload, ReportDogPayload } from "./payload.types";

const API_URL = process.env.REACT_APP_API_URL || "";

const build_endpoint = (path: string) => {
  return `${API_URL}${path}`;
};

class ServerApi {
  constructor(
    private token: string,
    private baseUrl: string,
  ) {}

  async fetch(
    url: RequestInfo,
    init?: Omit<RequestInit, "signal"> & { timeoutMs?: number },
  ) {
    const { token } = this;

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

  async sendData(
    url: RequestInfo,
    data: { [key: string]: any },
    method: string,
    headers?: HeadersInit,
  ) {
    const formData = new FormData();
    const { token } = this;

    for (const value in data) {
      formData.append(value, data[value]);
    }

    const response = await fetch(url, {
      method,
      body: formData,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  }

  // enter endpoint
  async query(payload: QueryPayload) {
    const url = build_endpoint("/dogfinder/query/");
    return this.sendData(url, payload, "POST");
  }

  async searchDog(payload: QueryPayload) {
    const dogType = payload.type;
    const newPayload = {
      img: payload.img,
    };
    let url = build_endpoint("/dogfinder/search_found_dogs/");
    if (dogType === DogType.FOUND) {
      url = build_endpoint("/dogfinder/search_lost_dogs/");
    }

    return this.sendData(url, newPayload, "POST");
  }

  async report_dog(payload: ReportDogPayload) {
    const url = build_endpoint("/dogfinder/add_document");

    return this.sendData(url, payload, "POST");
  }
}

export const useGetServerApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  return useCallback(
    async () => new ServerApi(await getAccessTokenSilently(), API_URL),
    [getAccessTokenSilently],
  );
};

export default ServerApi;

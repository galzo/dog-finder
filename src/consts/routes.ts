import { FC } from "react";
import { DogType } from "../facades/payload.types";
import { HomePage } from "./../pages/root/HomePage";
import { ReportDogPage } from "../pages/dogs/ReportDogPage";
import { SearchDogPage } from "../pages/dogs/SearchDogPage";
import { ResultsDogPage } from "../pages/dogs/ResultsDogPage";

export const AppRoutes = {
    root: "/dog-finder",
    dogs: {
        report: "/dog-finder/dogs/report",
        reportFound: "/dog-finder/dogs/report-found",
        reportLost: "/dog-finder/dogs/report-missing",
        searchLostDog: "/dog-finder/dogs/search-lost",
        searchFoundDog: "/dog-finder/dogs/search-found",
        results: "/dog-finder/dogs/results/:dogType",
    },
};

type RouteElement = () => JSX.Element;

interface Route {
    path: string;
    element: RouteElement | FC<any>;
    props?: Record<any, any>;
}

export const routesWithElements: Route[] = [
    {
        path: AppRoutes.root,
        element: HomePage,
    },
    {
        path: AppRoutes.dogs.reportLost,
        element: ReportDogPage as RouteElement,
        props: { dogType: DogType.LOST },
    },
    {
        path: AppRoutes.dogs.reportFound,
        element: ReportDogPage as RouteElement,
        props: { dogType: DogType.FOUND },
    },
    {
        path: AppRoutes.dogs.searchLostDog,
        element: SearchDogPage as RouteElement,
        props: { dogType: DogType.LOST },
    },
    {
        path: AppRoutes.dogs.searchFoundDog,
        element: SearchDogPage as RouteElement,
        props: { dogType: DogType.FOUND },
    },
    {
        path: AppRoutes.dogs.results,
        element: ResultsDogPage,
    },
];

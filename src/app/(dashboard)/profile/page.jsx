import { Suspense } from "react";
import Title from "../_components/Title";
import CardWrapper from "../_components/CardWrapper";
import CardWrapperSkeleton from "../_components/CardWrapperSkeleton";
import LastActivities from "../_components/LastActivities";

export default function Dashboard() {

    return (
        <div>
            <Title title={'داشبورد'} />
            <Suspense fallback={<CardWrapperSkeleton />}>
                <CardWrapper />
            </Suspense>

            <div className="pt-12">
                <LastActivities />
            </div>
        </div>
    )
}

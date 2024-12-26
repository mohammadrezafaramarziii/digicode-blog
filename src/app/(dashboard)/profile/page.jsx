import Title from "../_components/Title";
import TitleDot from "../_components/TitleDot";

export default async function Dashboard() {

    return (
        <div>
            <Title title={'داشبورد'} />


            <div className="pt-10">
                <TitleDot title={'آخرین مقالات'} />
            </div>
        </div>
    )
}

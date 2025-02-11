import Divider from "@/Components/Divider";
import H2 from "@/Components/Headings/H2";
import Section from "@/Components/Section";
import DownloadTile from "@/Components/Tiles/DownloadTile";
import { usePage } from "@inertiajs/react";
import { IoIosLock } from "react-icons/io";

const Items = () => {
    const { download } = usePage<{ download: any }>().props;

    return (
        <Section size="thin" className="space-y-8">
            <H2>{download.heading}</H2>
            <div className="w-full flex flex-col space-y-4 md:max-w-xl">
                <DownloadTile href="" target="blank">
                    {/* <DownloadTile href="/downloads/CV-stojdl.pdf" target="blank"> */}
                    {download.resume} (CV) (dočasně odebráno)
                </DownloadTile>
                <Divider heading={download.divider} icon={<IoIosLock />} />
                <div className="flex flex-col space-y-2">
                    <DownloadTile href="" locked disabled>
                        Sunizer ({download.code}){" "}
                        <span className="italic">[not ready yet]</span>
                    </DownloadTile>
                    <DownloadTile href="" locked disabled>
                        Internal Paradigma ({download.code}){" "}
                        <span className="italic">[not ready yet]</span>
                    </DownloadTile>
                </div>
            </div>
        </Section>
    );
};

export default Items;

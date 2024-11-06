import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button} from "@chakra-ui/react";
import AppInput from "@/lib/components/core/AppInput";
import PlayerList from "@/lib/components/pages/out-of-position-list/PlayersList";
import HomeAd from "@/lib/layouts/home/HomeAd";
import PlayerListFilter from "@/lib/components/pages/out-of-position-list/PlayerListFilter";
import PageContainer from "@/lib/layouts/PageContainer";

export default function OutOfPositionList() {

    return (
        <div className="flex flex-col">

            <HomeAd/>

            <div className="flex justify-center bg-gray-100 ">
                <PageContainer>
                    <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">
                        <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between py-2">
                            <h1 className="text-page-title font-semibold">
                                Out of Position Players List
                            </h1>

                            <div className='min-w-[250px]'>
                                <AppInput/>
                            </div>
                        </div>

                        <div className="flex text-sm text-gray-700">
                            Only players with a higher rating at a different position. Use the filters to narrow your
                            search.
                        </div>

                        <div>
                            <Accordion defaultIndex={[0]} allowMultiple sx={{border: '0px solid transparent'}}>
                                <AccordionItem>
                                    <AccordionButton
                                        border="none"
                                        px={0}
                                        bg="none"
                                        _hover={{
                                            bg: "transparent"
                                        }}
                                    >
                                        <Button colorScheme="" variant="outline">
                                            Show / Hide Filters
                                            <AccordionIcon/>
                                        </Button>


                                    </AccordionButton>
                                    <AccordionPanel pb={4} pl={0} pr={0}>
                                        <PlayerListFilter/>
                                    </AccordionPanel>
                                </AccordionItem>

                            </Accordion>


                        </div>

                        <div className="flex">
                            <PlayerList/>
                        </div>
                    </div>
                </PageContainer>
            </div>
        </div>
    );
}

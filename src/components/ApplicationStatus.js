import React from "react";
import Stepper from 'react-stepper-horizontal';
import styled from "styled-components";
import tw from "twin.macro";
import { Container, ContentWithPaddingLg } from "./misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-2.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-4.svg";
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings.js";
import { css } from "styled-components/macro"; //eslint-disable-line


const Heading = tw(SectionHeading)`w-full`;
const HeaderContent = tw.div``;
const Column = tw.div`flex flex-col items-center`;

const StepperContainer = tw.div`mt-12 w-full max-w-4xl relative h-auto text-sm`;
const Table = tw.table`table-fixed m-auto w-full text-lg relative`;
const TH = tw.th`border-2`;
const TD = tw.td`border-2`;
const TableContainer = tw.div`mt-12 w-full max-w-4xl relative h-auto text-sm`;

const EXAMPLE = [
    {
        title: "Incomplete"
    },
    {
        title: "Submitted - in review"
    },
    {
        title: "Scheduled Interview"
    },
    {
        title: "Accepted"
    },
];

const headers = ["Job Title",
    "Job ID",
    "Status",
    "Date Submitted",];
const row = ["Backend Intern",
    "736158",
    "Submitted - in review",
    "September 14, 2022",];

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
  `;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;


export default class ApplicationStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curIdx: 0,
            prevIdx: -1
        };
    }

    render() {
        return (
            <Container>
                <ContentWithPaddingLg>
                    <Column>
                        <HeaderContent>
                            <Heading>Application <span tw="text-primary-500">Status</span></Heading>
                        </HeaderContent>

                        <TableContainer>
                            <Table style={{ textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        {headers.map((header, _) => <TH>{header}</TH>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {row.map((elem, _) => <TD>{elem}</TD>)}
                                    </tr>
                                </tbody>
                            </Table>
                        </TableContainer>
                        <StepperContainer>
                            <Stepper
                                steps={EXAMPLE} activeStep={1} defaultColor={'#a273ff'} completeColor={'#3c0d99'} activeColor={'#3c0d99'} activeTitleColor={'#2a4365'} completeTitleColor={'#2a4365'} defaultTitleColor={'#7c8ba1'}
                            />
                        </StepperContainer>
                    </Column>
                </ContentWithPaddingLg>
                <DecoratorBlob1 />
                <DecoratorBlob2 />
            </Container >
        );
    }
}


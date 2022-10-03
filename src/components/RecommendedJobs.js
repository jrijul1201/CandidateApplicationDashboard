import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as ClockIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;

const Details = tw.div`px-6 rounded border-2 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block`;
const MetaContainer = tw.div``;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 my-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`my-4 leading-snug font-bold text-lg`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block my-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Jobs",
  heading = <>Recommended <span tw="text-primary-500">Jobs</span></>,

}) => {
  const jobs = [
    {
      location: "Bangalore",
      type: "Full Time",
      posted: "2",
      title: "Backend Intern",
      url: "/"
    },
    {
      location: "Hyderabad",
      type: "Part Time",
      posted: "5",
      title: "Full Stack Intern",
      url: "/"
    },
    {
      location: "Noida",
      type: "Full Time",
      posted: "20",
      title: "Program Manager",
      url: "/"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Subheading>{subheading}</Subheading>
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {jobs.map((job, index) => (
            <Column key={index}>
              <Card>
                <Details>
                  <Title>{job.title}</Title>
                  <MetaContainer>
                    <Meta>
                      <LocationIcon />
                      <div>{job.location}</div>
                    </Meta>
                    <Meta>
                      <BriefcaseIcon />
                      <div>{job.type}</div>
                    </Meta>
                    <Meta>
                      <ClockIcon />
                      <div>Posted {job.posted} days ago</div>
                    </Meta>
                  </MetaContainer>
                  <Link href={job.url}>Apply</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

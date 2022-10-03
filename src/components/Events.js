import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as ClockIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-3.svg";
import { ReactComponent as CalendarIcon } from "feather-icons/dist/icons/calendar.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 mx-4 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const Card = tw.div`h-full flex! flex-col max-w-sm relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-32 sm:h-48 bg-cover bg-center rounded`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded py-3 sm:py-2`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  heading = <>Upcoming <span tw="text-primary-500">Events</span></>,
}) => {
  const events = [
    {
      imageSrc: "https://thumbs.dreamstime.com/b/business-meeting-conference-flat-vector-illustration-businesspeople-spokesperson-listeners-faceless-characters-overview-report-169525747.jpg",
      title: "Orientation Session",
      description: "Join the session to know about the company and how you will fit into your role.",
      timeText: "3:00 PM",
      dateText: "09/10/22",
    },
    {
      imageSrc: "https://media.istockphoto.com/vectors/business-interview-illustration-vector-id977762310?k=20&m=977762310&s=612x612&w=0&h=HkTrU0wkI49xmerTBphlIgLh2SaP2wQzNQU3vxNLV3Y=",
      title: "Interview",
      description: "Please join the meeting 5 minutes before the scheduled time.",
      timeText: "4:00 PM",
      dateText: "11/10/22",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <ThreeColumn>
          {events.map((event, index) => (
            <Column key={index}>
              <Card key={index}>
                <CardImage imageSrc={event.imageSrc} />
                <TextInfo>
                  <TitleReviewContainer>
                    <Title>{event.title}</Title>
                  </TitleReviewContainer>
                  <SecondaryInfoContainer>
                    <IconWithText>
                      <IconContainer>
                        <CalendarIcon />
                      </IconContainer>
                      <Text>{event.dateText}</Text>
                    </IconWithText>
                    <IconWithText>
                      <IconContainer>
                        <ClockIcon />
                      </IconContainer>
                      <Text>{event.timeText}</Text>
                    </IconWithText>
                  </SecondaryInfoContainer>
                  <Description>{event.description}</Description>
                </TextInfo>
                <PrimaryButton>Join</PrimaryButton>
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

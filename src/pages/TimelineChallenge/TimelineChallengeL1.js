import React from "react";
import styled from "styled-components";

import ellipse from "resources/ellipse.svg";

import { timeline } from "./timelineConfigL1";

const TimelineChallenge = () => {
  let renderRight = true;
  return (
    <Container id="timeline">
      <InnerContainer>
        <Header>What To Expect From Your Investment</Header>
        {timeline.map(section => (
          <RowWrapper
            key={section.title}
            sectionName={section.title}
            className="timeline-group"
          >
            {section.items.map(item => {
              renderRight = !renderRight;
              return (
                <TimelineRow key={item.title}>
                  <ItemContainer left>
                    {!renderRight && (
                      <Item left className="timeline-item">
                        <Ellipse src={ellipse} left />
                        <ItemTitle left>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                      </Item>
                    )}
                  </ItemContainer>
                  <ItemContainer right>
                    {renderRight && (
                      <Item right className="timeline-item">
                        <Ellipse src={ellipse} right />
                        <ItemTitle right>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                      </Item>
                    )}
                  </ItemContainer>
                </TimelineRow>
              );
            })}
          </RowWrapper>
        ))}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1145px;

  :before {
    display: block;
    content: "";
    margin-top: -135px;
    height: 85px;
    visibility: hidden;
    pointer-events: none;
  }
`;

const InnerContainer = styled.div`
  margin: 50px 0;
  background-image: linear-gradient(
    to bottom,
    rgb(90, 181, 190),
    rgb(101, 188, 192) 16%,
    rgb(161, 223, 205)
  );
  padding: 20px;
  display: flex;
  flex-direction: column;

  .timeline-group:last-child {
    &:after {
      content: unset;
    }

    > div:last-child .timeline-item:last-of-type {
      &:before {
        content: unset;
      }
    }
  }
`;

const RowWrapper = styled.div`
  position: relative;

  :nth-child(odd) > div > div > div :last-child {
    color: #00008b;
  }

  &:before {
    content: ${props => `'${props.sectionName}'`};
    position: absolute;
    font-size: 25px;
    writing-mode: vertical-rl;
    left: 45px;
    height: 100%;
    text-align: center;
  }
  &:after {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, transparent 50%, #f8f9fa 50%);
    background-size: 50px 100%;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 3px;
    opacity: 0.4;
  }
`;

const TimelineRow = styled.div`
  display: flex;
  margin: auto;
  max-width: 68%;
`;

const ItemContainer = styled.div`
  flex: 1;
  text-align: ${props => (props.right ? "left" : "right")};
  align-self: flex-end;
`;

const Item = styled.div`
  padding: 20px;
  ${props => props.right && "padding-left: 40px;"}
  ${props => props.left && "padding-right: 40px;"}
  position: relative;

  &:before {
    content: "";
    width: 2px;
    background: white;
    height: 100%;
    position: absolute;
    ${props => props.right && "left: -1px;"}
    ${props => props.left && "right: -1px;"}
    top: 24px;
  }
`;

const ItemTitle = styled.div`
  font-size: 16px;
  margin-bottom: 14px;

  &:before {
    content: "";
    width: 28px;
    height: 2px;
    background: white;
    position: absolute;
    ${props => props.right && "left: 7px;"}
    ${props => props.left && "right: 7px;"}
    top: 28px;
  }
`;

const Ellipse = styled.img`
  position: absolute;
  ${props => props.right && "left: 0; transform: translateX(-50%);"}
  ${props => props.left && "right: 0; transform: translateX(50%);"}
  top: 22px;
`;

const ItemDescription = styled.div`
  font-size: 14px;
  text-align: right;
`;

const Header = styled.div`
  padding: 15px 20px;
  font-size: 28px;
  font-weight: 800;
`;

export default TimelineChallenge;

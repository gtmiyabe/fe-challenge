import React from "react";
import styled from "styled-components";

const timeline = [
  {
    items: [
      {
        description:
          "In order to invest in the YieldStreet Prism Fund, your YieldStreet investor account setup must be complete, and you must have settled funds for your full allocation in your YieldStreet Wallet.",
        title: "Get Ready for Your Allocation",
        active: true
      },
      {
        description:
          "When the investment window opens, you will submit your desired allocation for the YieldStreet Prism Fund.<br /><br /><b>Note</b>: Funds will <u>not</u> be pulled from your YieldStreet Wallet at this time, but will be reserved for the Fund in your YieldStreet Wallet.",
        title: "Investment Window Opens",
        disable: true
      },
      {
        description:
          "Once the minimum offering requirement of $15 million has been allocated by potential investors, the investment window will close and funds will be withdrawn from your YieldStreet Wallet at this time.",
        title: "Investment Window Closes"
      },
      {
        description:
          "Once all investor funds are pulled from the respective Wallets, it will take approximately two business days for initial investments to be made in the Fund and for the Fund to officially go active. Investors should expect to start seeing investment information in their portfolio once the Fund has been live for approximately two weeks.",
        title: "“Go Active” Date"
      }
    ],
    title: "First Month"
  },
  {
    items: [
      {
        description:
          "Investors will be able to opt into a distribution reinvestment program (DRIP) to automatically reinvest any cash distributions back into the Fund.",
        title: "Option for Distributions Reinvestment"
      }
    ],
    title: "1-4 Months"
  },
  {
    items: [
      {
        description:
          "Within approximately 15 months after the initial investments go active, and on a quarterly basis thereafter, the Fund may offer to repurchase a limited number of shares from investors subject to approval by the Fund's board of directors and to certain limitations as outlined in the Fund's prospectus.",
        title: "Option for Limited Liquidity"
      },
      {
        description: "48 months",
        title: "Fund Termination Date"
      }
    ],
    title: "1-4 Years"
  }
];

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
                        {/* <Ellipse src={ellipse} left /> */}
                        <ItemTitle left>{item.title}</ItemTitle>
                        <ItemDescription>{item.description}</ItemDescription>
                      </Item>
                    )}
                  </ItemContainer>
                  <ItemContainer right>
                    {renderRight && (
                      <Item right className="timeline-item">
                        {/* <Ellipse src={ellipse} right /> */}
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
  margin: 0;

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

// margin-left: calc(50% - 50vw);
// margin-right: calc(50% - 50vw);
// ${media.large`
// margin-left: unset;
// margin-right: unset;
// `}

const RowWrapper = styled.div`
  position: relative;
  max-width: 1145px;

  &:before {
    // content: ${props => `'${props.sectionName}'`};
    position: absolute;
    font-size: 20px;
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    left: 45px;
    height: 100%;
    text-align: center;
  }
  &:after {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, transparent 50%, #f8f9fa 50%);
    background-size: 20px 100%;
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
  font-weight: 600;
  margin-bottom: 4px;

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

const ItemDescription = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

const Header = styled.div`
  padding: 15px 20px;

  text-align: center;
  font-size: 28px;
`;

export default TimelineChallenge;

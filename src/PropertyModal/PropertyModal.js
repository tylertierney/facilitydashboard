import React from "react";
import "./propertyModal.css";
import { CloseButton } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  getStreetAddress,
  getCityStateZip,
  preventScrollOnBody,
  determineBadgeColor,
} from "../HelperFunctions";
import { ButtonGroup, Button, Badge } from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";

const PropertyModal = ({
  setModalShowing,
  isModalShowing,
  market,
  address,
  projectstage,
  whoscourt,
  projectstatusupdate,
  strategicdirection,
  size,
  expdate,
  featuredimg,
}) => {
  const hideModal = (e) => {
    e.stopPropagation();
    setModalShowing(false);
    preventScrollOnBody("allow");
  };

  return (
    <div className="modalContainer">
      <div className="modalHeaderDiv">
        <h2 className="modalHeaderText">Property Report</h2>
        <div onClick={(e) => hideModal(e)}>
          <CloseButton size="lg" className="closeBtn" />
        </div>
      </div>
      <div className="modalBodyDiv">
        <div
          className="modalBodyImg"
          style={{ backgroundImage: `url(${featuredimg})` }}
        >
          <Badge
            className="propertyModalBadge"
            colorScheme={determineBadgeColor(projectstage)}
          >
            {projectstage}
          </Badge>
        </div>
        <h1 className="modalStreetAddress">{getStreetAddress(address)}</h1>
        <p className="modalCityStateZip">{getCityStateZip(address)}</p>
        <div>
          <ButtonGroup variant="outline" pt="5px" pb="5px">
            <a
              href={"http://maps.google.com/?q=" + address}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                rightIcon={<SiGooglemaps />}
                colorScheme="green"
                size="sm"
                className="linkBtns"
                mr="10px"
              >
                Google Maps&nbsp;
              </Button>
            </a>
            <a href="#">
              <Button
                size="sm"
                rightIcon={<BsClipboardData />}
                className="linkBtns"
                colorScheme="blue"
              >
                Peer Property Report&nbsp;
              </Button>
            </a>
          </ButtonGroup>
          <div className="scenarioContainer">
            <h3 className="scenarioHeader">Blend & Extend</h3>
            <p className="scenarioDescription">
              Nisi ipsum aute irure eu incididunt. Nostrud velit labore
              adipisicing excepteur aute enim adipisicing excepteur adipisicing
              pariatur amet. Nostrud incididunt ad adipisicing nulla ex quis ex
              laboris proident proident enim. Lorem occaecat non quis labore
              magna incididunt mollit sit. Cupidatat in ut magna aliquip labore
              pariatur anim minim ad labore in do.
            </p>
            <p className="seeMoreBtn">
              <span className="seeMoreBtnSpan">See More</span>
            </p>
          </div>
          <Tabs>
            <TabList>
              <Tab>Documents</Tab>
              <Tab>Notes</Tab>
              <Tab>Staff</Tab>
            </TabList>

            <TabPanels className="tabPanel">
              <TabPanel className="tabPanel" _focus="none">
                <p>one!</p>
              </TabPanel>
              <TabPanel className="tabPanel">
                <p>two!</p>
              </TabPanel>
              <TabPanel
                className="tabPanel.tabpanel2.tabpanel3"
                style={{ boxShadow: "none" }}
              >
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;

import React, { Fragment } from "react";
import Icon1 from "./svg-1.svg";
import Icon2 from "./svg-3.svg";
import Icon3 from "./svg-5.svg";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = () => {
  return (
    <Fragment>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can access your platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that returns 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </Fragment>
  );
};

export default Services;

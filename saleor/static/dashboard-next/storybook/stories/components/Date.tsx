import { storiesOf } from "@storybook/react";
import * as React from "react";

import Date from "../../../components/Date";
import CardDecorator from "../../CardDecorator";
import Decorator from "../../Decorator";

storiesOf("Generics / Date", module)
  .addDecorator(CardDecorator)
  .addDecorator(Decorator)
  .add("default", () => <Date date="2018-04-07" />)
  .add("plain", () => <Date date="2018-04-07" plain={true} />);

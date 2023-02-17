import * as React from "react";
import Grid from "@mui/material/Grid";
import { useAppContext } from "src/appContext";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";
import Card from "src/components/atoms/employees/employeeCard";
import ActionButton from "src/components/atoms/buttons/actionButton";
//Default Content
import Propertie1 from "public/person1.jpg";
import Propertie2 from "public/person2.jpg";
import Propertie3 from "public/person3.jpg";
import Propertie4 from "public/person4.jpg";
import Propertie5 from "public/person5.jpg";
//Default Content Array
const DefaultContent = [
  {
    imageSrc: Propertie3.src,
    name: "Andrew Peterson",
    position: "CEO",
  },
  {
    imageSrc: Propertie1.src,
    name: "Linda Mustermann",
    position: "Managing Partner",
  },
  {
    imageSrc: Propertie2.src,
    name: "Herman Musterman",
    position: "Assistenc",
  },

  {
    imageSrc: Propertie4.src,
    name: "Joseph Mustermann",
    position: "Managing Partner",
  },
  {
    imageSrc: Propertie5.src,
    name: "Andrew Mustermann",
    position: "Managing Partner",
  },
];

export default function EmployeesGrid() {
  const { setStates } = useAppContext();
  const handleClickOpen = () => {
    setStates.dialogComponente(true);
  };
  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: 5, md: 10 }}
      >
        <Grid item xs={12}>
          <SectionHeading
            heading={"We bring you closer to your dreams"}
            subHeading={"The Team"}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={{ xs: 5, md: 4 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            {DefaultContent.map(({ name, position, imageSrc }, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={name + index}>
                  <Card name={name} position={position} imageSrc={imageSrc} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <ActionButton
              variant="contained"
              text={"Contect us"}
              onClick={handleClickOpen}
            />
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

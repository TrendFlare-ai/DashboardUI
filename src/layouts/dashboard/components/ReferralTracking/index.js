import React from "react";
import { Card, Stack } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import colors from "assets/theme/base/colors";
import { FaEllipsisH } from "react-icons/fa";
import linearGradient from "assets/theme/functions/linearGradient";
import CircularProgress from "@mui/material/CircularProgress";

function ReferralTracking() {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card
      sx={{
        height: "100%",
        background: linearGradient(
          gradients.cardDark.main,
          gradients.cardDark.state,
          gradients.cardDark.deg
        ),
      }}
    >
      <VuiBox sx={{ width: "100%" }}>
        <VuiBox
          display="flex"
          alignItems="center"
          justifyContent="space-beetween"
          sx={{ width: "100%" }}
          mb="40px"
        >
          <VuiTypography variant="lg" color="white" mr="auto" fontWeight="bold">
            Potential Clients Outreach
          </VuiTypography>
        </VuiBox>
        <VuiBox
          display="flex"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              flexDirection: "column",
              gap: "16px",
              justifyContent: "center",
              alignItems: "center",
            },
            [breakpoints.up("md")]: {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          })}
        >
          <Stack
            direction="column"
            spacing="20px"
            width="500px"
            maxWidth="100%"
            sx={({ breakpoints }) => ({
              mr: "auto",
              [breakpoints.only("md")]: {
                mr: "75px",
              },
              [breakpoints.only("xl")]: {
                width: "500px",
                maxWidth: "40%",
              },
            })}
          >
            <VuiBox display="flex" justifyContent="space-between">
              <VuiBox
                display="flex"
                width="250px"
                p="20px 22px"
                flexDirection="column"
                sx={({ breakpoints }) => ({
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: "20px",
                  [breakpoints.up("xl")]: {
                    maxWidth: "110px !important",
                  },
                  [breakpoints.up("xxl")]: {
                    minWidth: "180px",
                    maxWidth: "100% !important",
                  },
                })}
              >
                <VuiTypography color="text" variant="button" fontWeight="regular" mb="5px">
                  Today's Outreach
                </VuiTypography>
                <VuiTypography color="white" variant="lg" fontWeight="bold">
                  465 people
                </VuiTypography>
              </VuiBox>
              <VuiBox
                display="flex"
                width="220px"
                p="20px 22px"
                flexDirection="column"
                sx={({ breakpoints }) => ({
                  background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                  borderRadius: "20px",
                  [breakpoints.up("xl")]: {
                    maxWidth: "110px !important",
                  },
                  [breakpoints.up("xxl")]: {
                    minWidth: "180px",
                    maxWidth: "100% !important",
                  },
                })}
              >
                <VuiTypography color="text" variant="button" fontWeight="regular" mb="5px">
                  Months's Outreach
                </VuiTypography>
                <VuiTypography color="white" variant="lg" fontWeight="bold">
                  1165 people
                </VuiTypography>
              </VuiBox>
            </VuiBox>
          </Stack>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default ReferralTracking;

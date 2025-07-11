import React from "react";
import MainApplicantForm from "./form/main_applicant";
import { CustomTabs } from "@/components/tabs";
import SecondApplicantForm from "./form/second_applicant";
import ThirdApplicantForm from "./form/third_applicant";
import DashboardLayout from "../layout";
import { FormHeading } from "../onboarding/what_next";

export default function UploadsView() {
  const tabData = [
    {
      id: "first_user",
      label: "Boma Dave",
      content: <MainApplicantForm />,
    },
    {
      id: "second_user",
      label: "Urel Dave",
      content: <SecondApplicantForm />,
    },
    {
      id: "thrid_user",
      label: "Augustine Dave",
      content: <ThirdApplicantForm />,
    },
  ];
  return (
    <DashboardLayout>
      <FormHeading
        headerText="My Uploads"
        subHeading=" All your uploaded documents for your review"
      />
      <CustomTabs ariaLabel="Users tab" tabs={tabData} />
    </DashboardLayout>
  );
}

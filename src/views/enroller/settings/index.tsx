"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FormHeading } from "@/views/layout";
import { CustomCheckbox } from "@/components/form/checkbox";
import { Button } from "@/components/button";
import EnrollerDashboardLayout from "../layout";

type FormValues = {
  emailNotifications: boolean;
  smsNotifications: boolean;
};

export default function EnrollerSettingsView() {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      emailNotifications: false,
      smsNotifications: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Submitting data:", data);

    try {
      const response = await fetch("/api/user/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save preferences");
      }

      alert("Preferences saved successfully!");
    } catch (error) {
      console.error(error);
      alert("There was a problem saving your preferences.");
    }
  };

  return (
    <EnrollerDashboardLayout>
      <FormHeading
        headerText="Settings"
        subHeading="Keep your account personalised"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-ar-one-sans font-medium text-black">
              Send me email notifications
            </h3>
            <p className="text-text-dark text-xs font-plus_jakarta_sans">
              Make sure you have provided an email address in your account.
            </p>
          </div>
          <Controller
            name="emailNotifications"
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomCheckbox isSelected={value} onChange={onChange} />
            )}
          />
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-ar-one-sans font-medium text-black">
              Send me SMS notifications
            </h3>
            <p className="text-text-dark text-xs font-plus_jakarta_sans">
              Ensure your phone number is verified to receive SMS updates.
            </p>
          </div>
          <Controller
            name="smsNotifications"
            control={control}
            render={({ field: { value, onChange } }) => (
              <CustomCheckbox isSelected={value} onChange={onChange} />
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="py-2 w-32">
            Save
          </Button>
        </div>
      </form>
    </EnrollerDashboardLayout>
  );
}

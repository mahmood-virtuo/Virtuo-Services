"use client";

import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/styles";

export function FooterPhoneInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenPhoneRef = useRef<HTMLInputElement>(null);
  const hiddenCountryRef = useRef<HTMLInputElement>(null);
  const instanceRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const input = inputRef.current;
    const iti = intlTelInput(input, {
      containerClass: "virtuo-phone-input",
      countryOrder: ["ae", "pk", "in", "gb", "us"],
      countrySearch: true,
      dropdownParent: document.body,
      initialCountry: "ae",
      loadUtils: () => import("intl-tel-input/utils"),
      placeholderNumberPolicy: "OFF",
      separateDialCode: true,
      strictMode: true,
    });

    instanceRef.current = iti;
    let utilsReady = false;

    const syncFullNumber = () => {
      const selectedCountry = iti.getSelectedCountry();
      const rawNumber = input.value.replace(/\D/g, "");
      const fallbackNumber = selectedCountry?.dialCode
        ? `+${selectedCountry.dialCode}${rawNumber}`
        : rawNumber;
      const fullPhone = utilsReady ? iti.getNumber() || fallbackNumber : fallbackNumber;

      input.dataset.fullPhone = fullPhone;

      if (hiddenPhoneRef.current) {
        hiddenPhoneRef.current.value = fullPhone;
      }

      if (hiddenCountryRef.current) {
        hiddenCountryRef.current.value = selectedCountry?.iso2?.toUpperCase() ?? "";
      }
    };

    iti.promise
      .then(() => {
        utilsReady = true;
        syncFullNumber();
      })
      .catch(() => {
        syncFullNumber();
      });

    input.addEventListener("countrychange", syncFullNumber);
    input.addEventListener("input", syncFullNumber);
    input.form?.addEventListener("submit", syncFullNumber);
    syncFullNumber();

    return () => {
      input.removeEventListener("countrychange", syncFullNumber);
      input.removeEventListener("input", syncFullNumber);
      input.form?.removeEventListener("submit", syncFullNumber);
      iti.destroy();
      instanceRef.current = null;
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        aria-label="Phone Number"
        name="phone_display"
        type="tel"
      />
      <input ref={hiddenPhoneRef} name="phone" type="hidden" />
      <input ref={hiddenCountryRef} name="phone_country" type="hidden" />
    </>
  );
}

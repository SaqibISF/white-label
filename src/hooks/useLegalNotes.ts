"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { GET_LEGAL_NOTES_ROUTE } from "@/lib/constants";
import { setLegalNotes } from "@/store/app.slice";
import { addToast } from "@heroui/react";
import { RootState } from "@/store/store";

export const useLegalNotes = () => {
  const dispatch = useDispatch();
  const { isLegalNoticeLoadedOnce, termsAndConditions, privacyPolicy } =
    useSelector((state: RootState) => state.app);
  const [isLegalNotesLoading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    const fetchLegalNotes = async () => {
      try {
        if (isLegalNoticeLoadedOnce) return;
        const res = await axios.get<{
          privacy_policy: string;
          tos: string;
        }>(GET_LEGAL_NOTES_ROUTE, {
          headers: {
            Accept: "application/json",
          },
        });
        if (res.status === 200) {
          dispatch(
            setLegalNotes({
              termsAndConditions: res.data.tos,
              privacyPolicy: res.data.privacy_policy,
            })
          );
        } else {
          setErrorMessage("Failed to load legal notes");
        }
      } catch (error) {
        setErrorMessage(
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to load legal notes"
        );
      } finally {
        setLoading(false);
        if (errorMessage) {
          addToast({
            color: "danger",
            description: errorMessage,
          });
        }
      }
    };
    fetchLegalNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLegalNotesLoading,
    errorMessage,
    termsAndConditions,
    privacyPolicy,
  } as const;
};

"use client";

import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { filterSizeOptions } from "lib/store/collection-filters";
import { Fragment } from "react";

const filterBtnClass =
  "flex items-center justify-center whitespace-nowrap border-2 border-black px-4 text-center cursor-pointer text-sm font-bold uppercase phone:my-1 phone:h-8 phone:py-1 phone:text-base";

type CollectionFilterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  showSoldOut: boolean;
  onShowSoldOutChange: (show: boolean) => void;
  selectedSizes: string[];
  onToggleSize: (size: string) => void;
  onClear: () => void;
};

export default function CollectionFilterModal({
  isOpen,
  onClose,
  showSoldOut,
  onShowSoldOutChange,
  selectedSizes,
  onToggleSize,
  onClear,
}: CollectionFilterModalProps) {
  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 phone:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="relative flex w-3/5 max-w-[400px] flex-col border-2 border-black bg-white px-[30px] py-[15px] text-sm phone:max-h-full phone:w-full phone:max-w-[500px] phone:overflow-y-scroll phone:px-2.5"
                aria-label="popover-modal"
              >
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="close-modal-button"
                  className={clsx(
                    filterBtnClass,
                    "absolute right-0 top-0 h-5 w-[50px]! border-r-0 border-t-0 bg-black text-white hover:bg-white hover:text-black phone:my-0 phone:px-2",
                  )}
                >
                  Close
                </button>

                <div className="phone:p-2">
                  <div className="my-4">
                    <h3 className="select-none text-base font-bold uppercase">
                      Sold Out
                    </h3>
                    <div className="mt-2">
                      <div className="inline-flex overflow-hidden border-2 border-black">
                        <button
                          type="button"
                          aria-label="show-button"
                          disabled={showSoldOut}
                          onClick={() => onShowSoldOutChange(true)}
                          className={clsx(
                            "px-6 py-1 text-sm font-bold uppercase transition disabled:cursor-not-allowed phone:text-base",
                            showSoldOut
                              ? "cursor-pointer bg-black text-white"
                              : "cursor-pointer bg-white text-black",
                          )}
                        >
                          Show
                        </button>
                        <button
                          type="button"
                          aria-label="hide-button"
                          disabled={!showSoldOut}
                          onClick={() => onShowSoldOutChange(false)}
                          className={clsx(
                            "border-l border-black px-6 py-1 text-sm font-bold uppercase transition disabled:cursor-not-allowed phone:text-base",
                            !showSoldOut
                              ? "cursor-pointer bg-black text-white"
                              : "cursor-pointer bg-white text-black",
                          )}
                        >
                          Hide
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <h3 className="select-none text-base font-bold uppercase">
                      In-Stock
                    </h3>
                    <div className="mt-2 grid grid-cols-5 gap-2">
                      {filterSizeOptions.map((size) => {
                        const selected = selectedSizes.includes(size);
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => onToggleSize(size)}
                            className={clsx(
                              filterBtnClass,
                              "py-1",
                              selected
                                ? "bg-black text-white hover:bg-black hover:text-white"
                                : "bg-white text-black hover:bg-black hover:text-white",
                            )}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      aria-label="clear-btn"
                      onClick={onClear}
                      className={clsx(
                        filterBtnClass,
                        "bg-black py-1 text-white hover:bg-white hover:text-black",
                      )}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Form } from "@remix-run/react";
import * as React from "react";
import { Fragment } from "react";
import type { NoteId } from "~/types/notes";

const NoteOptions: React.FC<NoteId> = ({
  idNote,
  open,
  setOpen,
  noteTitle,
}) => {
  function classNames({ classes = [] }: { classes?: any[] } = {}) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm">
        <Menu as="div" className="relative -ml-px block mr-2">
          <Menu.Button className="relative inline-flex items-center rounded-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
            <ChevronDownIcon className="h-3 w-3" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-9 top-px z-10 -mr-1 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames({
                        classes: [
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm",
                        ],
                      })}
                      onClick={() => {
                        setOpen({
                          ...open,
                          open: !open.open,
                          title: noteTitle,
                          id: idNote,
                        });
                      }}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Form method="DELETE" action="/home">
                      <input
                        type="number"
                        className="hidden"
                        name="noteId"
                        readOnly
                        value={idNote}
                      />
                      <button
                        type="submit"
                        className={classNames({
                          classes: [
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm",
                          ],
                        })}
                      >
                        Delete
                      </button>
                    </Form>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="min-w-0 flex-1 text-sm leading-6">
        <label
          htmlFor={`note-${noteTitle}`}
          className="select-none font-semibold text-gray-200"
        >
          {noteTitle}
        </label>
      </div>
    </>
  );
};

export default NoteOptions;

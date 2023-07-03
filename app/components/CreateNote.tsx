import { Form, useNavigation } from "@remix-run/react";
import * as React from "react";

export default function CreateNote() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    if (navigation.state == "idle") formRef.current?.reset();
  }, [navigation.state]);
  return (
    <>
      <Form action="/home" method="POST" ref={formRef}>
        <div className="mx-40 py-10 flex flex-col">
          <label
            htmlFor="create-note"
            className="block text-lg leading-6 text-slate-100"
          >
            Create a new one...
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="create-note"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4"
              placeholder="create a new to-do..."
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-32 rounded-md  bg-slate-300 px-2.5 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-gray-700 hover:text-slate-300"
          >
            Add
          </button>
        </div>
      </Form>
    </>
  );
}
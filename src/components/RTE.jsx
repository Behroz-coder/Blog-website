import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label className="inline-block mb-1 pl-1 text-gray-800">{label}</label>
      )}

      {/* Controller for integrating with react-hook-form */}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey="cat6ez3bchvpaqg6ygi9byj3s4sdk17t6rki0hlzruum73pe"
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: 'Roboto', sans-serif; font-size: 16px; line-height: 1.6 }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

import { createRouteHandler, createUploadthing, FileRouter } from "uploadthing/next";

const uploadthing = createUploadthing();

export const { GET, POST } = createRouteHandler({
  router: {
    general: uploadthing({ image: { maxFileSize: "4MB" } })
      .middleware(() => {
        return {};
      })
      .onUploadComplete(({ metadata, file }) => {
        console.log("File URL:", file.url);
      }),
  } satisfies FileRouter,
});
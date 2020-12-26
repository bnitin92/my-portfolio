import sanityClient from "@sanity/client";

// to tell REact to know which sanity project to look at
export default sanityClient({
  projectId: "83q2lwf1", // from sanit.json or manage sanity
  dataset: "production",
});

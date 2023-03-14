import * as React from "react";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import Head from "../components/Head"
export const config: TemplateConfig = {
  stream: {
    $id: "add",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
    ],

    filter: {
      entityTypes: ["location"],
    },

    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
  alternateLanguageFields: ["slug", "name", "id"],
};

var url = ""; /** current detail page url */

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  if (!document.slug) {
    let slugString = document.id + "-" + document.name;
    url = `${document.meta.locale}/${slugString}.html`;
  } else {
    url = `${document.meta.locale}/${document.slug.toString()}.html`;
  }

  return url;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
  path,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

/**
call server side api
 */
type ExternalApiRenderData = TemplateRenderProps;

const Location: Template<ExternalApiRenderData>= ({
  document,
}) => {
  const {
    _site,
    id,
    name,
  } = document;

//   let templateData = { document: document, __meta: __meta };
  /**  created instance for i18*/
  return (
    <Head document={_site}/>

 
 );
};
export default Location;
import React from "react";
import { Skills } from "../../../constants";

const SkillsSection = ({ items }: { items: Skills }) => (
  <div className="flex flex-col md:flex-row w-full py-4 md:flex-start">
    <div className="w-full md:w-4/12">
      <h2>Technical Skills </h2>
    </div>
    <div className="tailwind-hidden md:flex border-l-2 border-solid border-primary pr-2" />
    <div className="grid gap-y-6 sm:grid-cols-3 md:gap-x-4 place-content-start sm:place-content-center">
      {!!items.languages.length && (
        <div>
          <h6 className="pb-4">Languages</h6>
          <ul>
            {items.languages.map((language) => (
              <li className="text-gray-900 dark:text-gray-400" key={language}>
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!items.frameworks_and_libraries.length && (
        <div>
          <h6 className="pb-4">{"Frameworks"}</h6>
          <ul>
            {items.frameworks_and_libraries.map((fw) => (
              <li className="text-gray-900 dark:text-gray-400" key={fw}>
                {fw}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!items.databases.length && (
        <div>
          <h6 className="pb-4">Databases</h6>
          <ul>
            {items.databases.map((database) => (
              <li className="text-gray-900 dark:text-gray-400" key={database}>
                {database}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!items.ui_ux.length && (
        <div>
          <h6 className="pb-4">UI/UX</h6>
          <ul>
            {items.ui_ux.map((design) => (
              <li className="text-gray-900 dark:text-gray-400" key={design}>
                {design}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!!items.misc.length && (
        <div>
          <h6 className="pb-4">Miscellaneous</h6>
          <ul>
            {items.misc.map((misc) => (
              <li className="text-gray-900 dark:text-gray-400" key={misc}>
                {misc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default SkillsSection;

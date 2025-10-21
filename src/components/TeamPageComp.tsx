"use client";
import { teamMembers } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Tree, TreeNode } from "react-organizational-chart";
import { TeamMember } from "./TeamMember";
import SectionTitle from "./SectionTitle";
import BannerSection from "./BannerSection";
import { useState, useMemo } from "react";

export default function TeamPageComp() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Properly structured hierarchy based on roles
  const organizationalStructure = useMemo(() => {
    const chairman = teamMembers.find((member) => member.role === "Chairman");
    const viceChairman = teamMembers.find(
      (member) => member.role === "Vice Chairman"
    );
    const managingDirector = teamMembers.find(
      (member) => member.role === "Managing Director (MD)"
    );
    const ceo = teamMembers.find(
      (member) => member.role === "Chief Executive Officer (CEO)"
    );

    const directors = teamMembers.filter(
      (member) =>
        member.role.includes("Director") &&
        !member.role.includes("Managing Director")
    );

    const generalManager = teamMembers.find(
      (member) => member.role === "General Manager (GM)"
    );
    const salesMarketingOfficers = teamMembers.filter(
      (member) => member.role === "Sales and Marketing Officer"
    );

    return {
      chairman,
      viceChairman,
      managingDirector,
      ceo,
      directors,
      generalManager,
      salesMarketingOfficers,
    };
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="min-h-screen"
    >
      {/* Banner Section */}
      <BannerSection
        image="/backgrounds/team-real-estate.png"
        title="Meet the Minds Behind Banglar Choya"
        subtitle="Our team blends deep real estate expertise with a shared passion for creating iconic, investment-worthy communities across Bangladesh."
      />

      {/* Team Group Photo */}
      <div className="container mx-auto px-6 max-w-7xl mt-10 flex items-center justify-center">
        {!imageLoaded && (
          <div className="w-full max-w-4xl h-80 rounded-lg bg-gray-200 animate-pulse" />
        )}

        <img
          src="https://i.postimg.cc/XYWhVJbG/team-photo.jpg"
          alt="Banglar Choya Team"
          onLoad={() => setImageLoaded(true)}
          className={`w-full max-w-4xl rounded-lg shadow-lg shadow-green-800 border-2 border-green-950 transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-10 md:py-20">
       <div className="hidden lg:block">
         <SectionTitle
          title="Our Organizational Structure"
          subtitle="Meet the dedicated professionals behind Banglar Choya Model City Ltd."
        />

        {/* Organizational Chart */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="hidden lg:block mt-10 w-full overflow-x-auto overflow-y-hidden"
        >
          <div className="py-10 min-w-[900px] sm:min-w-[1200px] md:min-w-[1500px] lg:min-w-full flex justify-center">
            <div className="scale-[0.8] sm:scale-90 md:scale-100 origin-top">
              <Tree
                lineWidth={"2px"}
                lineColor={"#16a34a"}
                lineBorderRadius={"10px"}
                label={
                  organizationalStructure.chairman && (
                    <div className="inline-block">
                      <TeamMember
                        {...organizationalStructure.chairman}
                        index={0}
                        highlight={false}
                      />
                    </div>
                  )
                }
              >
                {/* Vice Chairman */}
                {organizationalStructure.viceChairman && (
                  <TreeNode
                    label={
                      <div className="inline-block">
                        <TeamMember
                          {...organizationalStructure.viceChairman}
                          index={1}
                          highlight={false}
                        />
                      </div>
                    }
                  >
                    {/* Managing Director */}
                    {organizationalStructure.managingDirector && (
                      <TreeNode
                        label={
                          <div className="inline-block">
                            <TeamMember
                              {...organizationalStructure.managingDirector}
                              index={2}
                              highlight={
                                organizationalStructure.managingDirector
                                  .highlight || false
                              }
                            />
                          </div>
                        }
                      >
                        {/* CEO */}
                        {organizationalStructure.ceo && (
                          <TreeNode
                            label={
                              <div className="inline-block">
                                <TeamMember
                                  {...organizationalStructure.ceo}
                                  index={3}
                                  highlight={false}
                                />
                              </div>
                            }
                          >
                            {/* Directors */}
                            {organizationalStructure.directors.length > 0 && (
                              <TreeNode
                                label={
                                  <div className="inline-block w-full">
                                    <div className="text-center mb-4 w-full text-lg font-bold text-green-800">
                                      Board of Directors
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                                      {organizationalStructure.directors.map(
                                        (director, index) => (
                                          <TeamMember
                                            key={director.name}
                                            {...director}
                                            index={index + 4}
                                            highlight={
                                              director.highlight || false
                                            }
                                          />
                                        )
                                      )}
                                    </div>
                                  </div>
                                }
                              >
                                {/* General Manager */}
                                {organizationalStructure.generalManager && (
                                  <TreeNode
                                    label={
                                      <div className="inline-block">
                                        <TeamMember
                                          {...organizationalStructure.generalManager}
                                          index={7}
                                          highlight={false}
                                        />
                                      </div>
                                    }
                                  >
                                    {/* Sales & Marketing Team */}
                                    {organizationalStructure
                                      .salesMarketingOfficers.length > 0 && (
                                      <TreeNode
                                        label={
                                          <div className="inline-block w-full">
                                            <div className="text-center mb-4 w-full text-md font-semibold text-green-700">
                                              Sales & Marketing Team
                                            </div>
                                            <div className="flex flex-wrap gap-4 justify-center">
                                              {organizationalStructure.salesMarketingOfficers.map(
                                                (officer, index) => (
                                                  <TeamMember
                                                    key={officer.name}
                                                    {...officer}
                                                    index={index + 8}
                                                    highlight={
                                                      officer.highlight || false
                                                    }
                                                  />
                                                )
                                              )}
                                            </div>
                                          </div>
                                        }
                                      />
                                    )}
                                  </TreeNode>
                                )}
                              </TreeNode>
                            )}
                          </TreeNode>
                        )}
                      </TreeNode>
                    )}
                  </TreeNode>
                )}
              </Tree>
            </div>
          </div>
        </motion.div>
       </div>

        {/* Alternative Mobile-Friendly View */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="mt-16 lg:hidden"
        >
          <SectionTitle
            title="Team Overview"
            subtitle="Our leadership and management team"
            className="text-center"
          />

          <div className="space-y-8 mt-8">
            {/* Chairman & Vice Chairman */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizationalStructure.chairman && (
                <TeamMember
                  {...organizationalStructure.chairman}
                  index={0}
                  highlight={false}
                />
              )}
              {organizationalStructure.viceChairman && (
                <TeamMember
                  {...organizationalStructure.viceChairman}
                  index={1}
                  highlight={false}
                />
              )}
            </div>

            {/* Managing Director & CEO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizationalStructure.managingDirector && (
                <TeamMember
                  {...organizationalStructure.managingDirector}
                  index={2}
                  highlight={
                    organizationalStructure.managingDirector.highlight || false
                  }
                />
              )}
              {organizationalStructure.ceo && (
                <TeamMember
                  {...organizationalStructure.ceo}
                  index={3}
                  highlight={false}
                />
              )}
            </div>

            {/* Directors */}
            {organizationalStructure.directors.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-green-800 text-center mb-6">
                  Board of Directors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {organizationalStructure.directors.map((director, index) => (
                    <TeamMember
                      key={director.name}
                      {...director}
                      index={index + 4}
                      highlight={director.highlight || false}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* General Manager */}
            {organizationalStructure.generalManager && (
              <div className="flex justify-center">
                <TeamMember
                  {...organizationalStructure.generalManager}
                  index={7}
                  highlight={false}
                />
              </div>
            )}

            {/* Sales & Marketing Team */}
            {organizationalStructure.salesMarketingOfficers.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-green-800 text-center mb-6">
                  Sales & Marketing Team
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {organizationalStructure.salesMarketingOfficers.map(
                    (officer, index) => (
                      <TeamMember
                        key={officer.name}
                        {...officer}
                        index={index + 8}
                        highlight={officer.highlight || false}
                      />
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

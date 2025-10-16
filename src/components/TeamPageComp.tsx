"use client";
import { teamMembers } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/animations";
import { Tree, TreeNode } from "react-organizational-chart";
import { TeamMember } from "./TeamMember";
import SectionTitle from "./SectionTitle";
import BannerSection from "./BannerSection";
import { useState } from "react";

export default function TeamPageComp() {
  // Assuming teamMembers is structured with hierarchy information
  const ceo = teamMembers[0];
  const leadership = teamMembers.slice(1, 3);
  const managers = teamMembers.slice(3, 6);
  const staff = teamMembers.slice(6);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className=""
    >
      {/* banner section  */}
      <BannerSection
        image="/backgrounds/team-real-estate.png"
        title="Meet the Minds Behind Banglar Choya"
        subtitle="Our team blends deep real estate expertise with a shared passion for creating iconic, investment-worthy communities across Bangladesh."
      />

      {/* Team group photo */}
      <div className="container mx-auto px-6 max-w-7xl mt-10 flex items-center justify-center">
        {!imageLoaded && (
          <div className="w-2/3 h-80 rounded-lg bg-gray-200 animate-pulse" />
        )}

        <img
          src="https://i.postimg.cc/XYWhVJbG/team-photo.jpg"
          alt="Banglar Choya Team"
          onLoad={() => setImageLoaded(true)}
          className={`w-2/3 rounded-lg shadow-lg shadow-green-800 border-2 border-green-950 transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl md:py-20">
        <SectionTitle
          title="Our Team"
          subtitle="Meet the dedicated professionals behind Banglar Choya Model City Ltd."
        />

        {/* Organizational Chart */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mt-10">
          <div className="min-w-0 py-10">
            <Tree
              lineWidth={"2px"}
              lineColor={"#84cc16"}
              lineBorderRadius={"10px"}
              label={
                <div className="inline-block">
                  <TeamMember {...ceo} index={0} highlight={false} />
                </div>
              }
            >
              {/* Leadership Team */}
              <TreeNode
                label={
                  <div className="inline-block w-full">
                    <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                      Leadership Team
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                      {leadership.map((member, index) => (
                        <TeamMember
                          key={index}
                          {...member}
                          index={index + 1}
                          highlight={member.highlight || false}
                        />
                      ))}
                    </div>
                  </div>
                }
              >
                {/* Managers */}
                <TreeNode
                  label={
                    <div className="inline-block w-full">
                      <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                        Department Managers
                      </div>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {managers.map((member, index) => (
                          <TeamMember
                            key={index}
                            {...member}
                            index={index + 4}
                            highlight={member.highlight || false}
                          />
                        ))}
                      </div>
                    </div>
                  }
                >
                  {/* Staff */}
                  <TreeNode
                    label={
                      <div className="inline-block w-full">
                        <div className="text-center mb-2 w-full text-sm font-semibold text-green-700">
                          Team Members
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center">
                          {staff.map((member, index) => (
                            <TeamMember
                              key={index}
                              {...member}
                              index={index + 7}
                              highlight={member.highlight || false}
                            />
                          ))}
                        </div>
                      </div>
                    }
                  />
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

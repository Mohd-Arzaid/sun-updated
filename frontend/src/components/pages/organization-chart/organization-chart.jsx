import React from "react";
import {
  Crown,
  Briefcase,
  Users,
  Settings,
  Calculator,
  Code,
  GraduationCap,
} from "lucide-react";

const OrganizationChart = () => {
  return (
    <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12 py-8">
      <div className="overflow-x-auto org-chart-scrollbar">
        <div className="flex flex-col items-center w-full min-w-[800px]">
          {/* Root: DIRECTOR */}
          <div className="relative flex flex-col items-center">
            <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                <Crown
                  className="w-4 h-4 text-neutral-700"
                  aria-hidden="true"
                />
                <span>Director</span>
              </div>
            </div>

            {/* Connector: Director to CEO */}
            <div className="w-[2px] h-8 bg-neutral-200" />
          </div>

          {/* Level 2: CEO */}
          <div className="relative flex flex-col items-center">
            <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                <Briefcase
                  className="w-4 h-4 text-neutral-700"
                  aria-hidden="true"
                />
                <span>CEO</span>
              </div>
            </div>

            {/* Vertical Connector below CEO */}
            <div className="w-[2px] h-8 bg-neutral-200" />
          </div>

          {/* Level 3 branches */}
          <div className="relative w-full max-w-5xl">
            {/* Horizontal bar connecting branches */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[2px] bg-neutral-200" />

            <div className="flex justify-between w-full pt-8">
              {/* Branch 1: HR. DEPT. (2) */}
              <div className="flex flex-col items-center w-1/4 relative">
                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                  <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                    <Users
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>HR. DEPT. (2)</span>
                  </div>
                </div>
              </div>

              {/* Branch 2: HEAD OPERATIONS */}
              <div className="flex flex-col items-center w-1/4 relative">
                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                  <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                    <Settings
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>Head Operations</span>
                  </div>
                </div>

                {/* Vertical Connector below Head Operations */}
                <div className="w-[2px] h-28 bg-neutral-200" />

                {/* Sub-level under Head Operations */}
                <div className="relative w-full min-w-[800px]">
                  {/* Horizontal bar connecting sub-branches */}
                  <div className="absolute top-0 left-[16.67%] right-[16.67%] h-[2px] bg-neutral-200" />

                  <div className="flex justify-evenly w-full pt-8">
                    {/* Sub-branch 1: FMCS Manager */}
                    <div className="flex flex-col items-center w-1/3 relative">
                      <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                      <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                        <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                          <Briefcase
                            className="w-4 h-4 text-neutral-700"
                            aria-hidden="true"
                          />
                          <span>FMCS Manager</span>
                        </div>
                      </div>

                      {/* Vertical Connector below FMCS Manager */}
                      <div className="w-[2px] h-10 bg-neutral-200" />

                      {/* Sub-level under FMCS Manager */}
                      <div className="flex flex-col items-center relative">
                        <div className="absolute top-[-16px] w-[2px] h-4 bg-neutral-200" />
                        <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                          <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                            <Users
                              className="w-4 h-4 text-neutral-700"
                              aria-hidden="true"
                            />
                            <span>FMCS Team (10)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-branch 2: Indian BIS Manager */}
                    <div className="flex flex-col items-center w-1/3 relative">
                      <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                      <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                        <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                          <Briefcase
                            className="w-4 h-4 text-neutral-700"
                            aria-hidden="true"
                          />
                          <span>Indian BIS Manager</span>
                        </div>
                      </div>

                      {/* Vertical Connector below Indian BIS Manager */}
                      <div className="w-[2px] h-10 bg-neutral-200" />

                      {/* Sub-level under Indian BIS Manager */}
                      <div className="flex flex-col items-center relative">
                        <div className="absolute top-[-16px] w-[2px] h-4 bg-neutral-200" />
                        <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                          <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                            <Users
                              className="w-4 h-4 text-neutral-700"
                              aria-hidden="true"
                            />
                            <span>Indian BIS Team (4)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-branch 3: General Service Manager */}
                    <div className="flex flex-col items-center w-1/3 relative">
                      <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                      <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                        <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                          <Settings
                            className="w-4 h-4 text-neutral-700"
                            aria-hidden="true"
                          />
                          <span>General Service Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch 3: ACCOUNT MANAGER */}
              <div className="flex flex-col items-center w-1/4 relative">
                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                  <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                    <Calculator
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>Account Manager</span>
                  </div>
                </div>

                {/* Vertical Connector below Account Manager */}
                <div className="w-[2px] bg-neutral-200" />

                {/* Sub-level under Account Manager */}
                <div className="relative w-full min-w-[200px]">
                  <div className="flex justify-center w-full pt-8">
                    {/* Sub-branch: Accounts Dept (2) */}
                    <div className="flex flex-col items-center relative">
                      <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                      <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                        <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                          <Calculator
                            className="w-4 h-4 text-neutral-700"
                            aria-hidden="true"
                          />
                          <span>Accounts Dept (2)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch 4: CTO */}
              <div className="flex flex-col items-center w-1/4 relative">
                <div className="absolute top-[-32px] w-[2px] h-8 bg-neutral-200" />
                <div className="px-4 py-2 bg-neutral-100 border-2 border-neutral-200 rounded-lg flex items-center justify-center whitespace-nowrap">
                  <div className="flex items-center gap-2 text-center font-geist text-sm uppercase text-neutral-800 font-medium">
                    <Code
                      className="w-4 h-4 text-neutral-700"
                      aria-hidden="true"
                    />
                    <span>CTO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;

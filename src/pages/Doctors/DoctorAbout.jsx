

const DoctorAbout = () => {
    return (
        <div>
          <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
              About of{" "}
              <span className="text-irisBlueColor font-bold text-[24px] leading-9">
                Muhibur Rahman
              </span>
            </h3>
            <p className="text_para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              voluptas totam repudiandae eaque commodi, perferendis corrupti quidem
              deleniti quisquam alias earum illum exercitationem corporis in quia
              sit iusto. Iusto, id. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim quas eum velit iusto id similique nemo modi, et
              ea minus deserunt ullam quae architecto nulla esse itaque aliquam
              libero eligendi.
            </p>
          </div>
    
          <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
              Education
            </h3>
    
            <ul className="pt-4 md:p-5">
              <li className="flex flex-col  sm:flex-row sm:justify-between sm;items-end md:gap-5 mb-[30px]">
                <div>
                  <p className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    07-09-2008- 09-13-2011
                  </p>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    PHD in Surgeon
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  Apollo Hospital,Mumbai
                </p>
              </li>
              <li className="flex flex-col  sm:flex-row sm:justify-between sm;items-end md:gap-5 mb-[30px]">
                <div>
                  <p className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                    12-01-2010- 15-12-2024
                  </p>
                  <p className="text-[16px] leading-6 font-medium text-textColor">
                    PHD in Surgeon
                  </p>
                </div>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  Apollo Hospital,Mumbai
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
              Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <p className="text-yellowColor text-[15px] leading-6 font-semibold">
                        07-04-2010 - 08-13-2012
                    </p>
                </li>
            </ul>
          </div>
        </div>
      );
    };
    

export default DoctorAbout;
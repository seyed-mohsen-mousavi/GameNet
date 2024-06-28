import { useState } from "react";
import { getAllProvinces, getCitiesByProvinceName } from "../..";
import { ArrowUturnRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
function FindGameNet() {
  const [destination, setDestination] = useState([]);
  return (
    <div className="relative 2xl:h-[40rem] xl:h-[32rem]  sm:h-[30rem] h-72  rounded-2xl">
      <img
        className="w-full h-full object-cover"
        src="/images/Esports-venue-2048x1365.jpg"
        alt=""
      />
      <div className=" absolute w-full bottom-10 left-0 righ-0 px-5">
        <h2 className="text-2xl font-PeydaMed pr-5 pb-3">
          پیدا کردن بهترین گیم نت{" "}
        </h2>
        <div className=" bg-gray-700 w-full h-full rounded-lg flex items-center">
          <SelectDestination
            setDestination={setDestination}
            destination={destination}
          />
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default FindGameNet;
function SelectDestination({ setDestination, destination }) {
  const provinces = getAllProvinces();
  const [provincesSelect, setProvincesSelect] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="md:relative mx-10 py-5">
      <p className="text-sm lg:text-base dark:text-white">انتخاب شهر : </p>
      <button
        type="button"
        className="bg-gray-400/10  items-center hover:bg-gray-400/20 transition-colors p-2 rounded-lg flex gap-1 justify-center mt-1 w-full dark:text-white"
        onClick={onOpen}
      >
        <MapPinIcon className="w-6" />
        {destination.length > 0 ? (
          <p className="text-xs pl-3">
            {destination[1]} ,{destination[0]}
          </p>
        ) : (
          <p className="pl-3">انتخاب</p>
        )}
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {provincesSelect ? "شهر" : "استان"}
              </ModalHeader>
              <ModalBody>
                <div className="cus-scroll overflow-auto h-72">
                  {provincesSelect ? (
                    <div className="pr-3 md:pr-0 pt-5 md:pt-0">
                      <div className="w-full flex items-center justify-between">
                        <button
                          className="flex"
                          onClick={() => setProvincesSelect()}
                        >
                          <ArrowUturnRightIcon className="w-4" />
                        </button>
                      </div>
                      <ul className="pt-1">
                        {getCitiesByProvinceName(provincesSelect).map((c) => (
                          <li
                            onClick={() => {
                              setDestination([]);
                              setDestination((prev) => [...prev, c.name]);
                              setDestination((prev) => [
                                ...prev,
                                provincesSelect,
                              ]);
                              setProvincesSelect();
                              onClose();
                              document.body.style.overflow = "auto";
                            }}
                            key={c.id}
                            className="px-2 py-2 hover:bg-white/50 rounded-lg cursor-pointer ml-3"
                          >
                            {c.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="pr-3 md:pr-0 pt-5 md:pt-0">
                      <ul className="pt-1">
                        {provinces.map((p) => (
                          <li
                            onClick={() => setProvincesSelect(p.name)}
                            key={p.id}
                            className="px-2 py-2 hover:bg-white/50 rounded-lg cursor-pointer ml-3"
                          >
                            {p.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter dir="ltr">
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button color="primary" onPress={onClose}>
                  ثبت
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function Filter() {
  return (
    <div className="md:relative flex mx-10 py-5">
      <p className="text-sm lg:text-base dark:text-white">فیلتر : </p>
      <div>
        
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Cake } from "lucide-react";
import {
  FaDog,
  FaCat,
  FaPaw,
  FaVenusMars,
  FaBirthdayCake,
} from "react-icons/fa";
import "./Section2.css";
import labradorImage from "./Images/labrador.jpg";
import germanShepherdImage from "./Images/germansheperd.jpg";
import siameseImage from "./Images/Siamese.jpg";
import boerImage from "./Images/Boer.jpeg";
import siberian from "./Images/siberianhusky1.jpeg";
import alpinegoat from "./Images/alpinegoat.jpeg";
import bombaycat from "./Images/bombaycat.jpeg";
import britishshorthair from "./Images/britishshorthair.jpeg";
import bulldog from "./Images/bulldog.jpeg";
import jamnapari from "./Images/jamnapari.jpeg";
import rotweiler from "./Images/rotweiler.jpeg";

function Section2() {
  const petData = [
    {
      type: "Dog",
      breed: "Rotweiler",
      gender: "Male",
      age: "1-2 years",
      image: rotweiler,
    },
    {
      type: "Dog",
      breed: "Bulldog",
      gender: "Male",
      age: "1-2 years",
      image: bulldog,
    },
    {
      type: "Dog",
      breed: "German Shepherd",
      gender: "Female",
      age: "3-5 years",
      image: germanShepherdImage,
    },
    {
      type: "Cat",
      breed: "Britishshorthair",
      gender: "Female",
      age: "1-2 years",
      image: britishshorthair,
    },

    {
      type: "Cat",
      breed: "Siamese",
      gender: "Male",
      age: "6+ years",
      image: siameseImage,
    },
    {
      type: "Goat",
      breed: "Boer",
      gender: "Female",
      age: "1-2 years",
      image: boerImage,
    },

    {
      type: "Goat",
      breed: "Alpinegoat",
      gender: "Male",
      age: "6+ years",
      image: alpinegoat,
    },
    {
      type: "Dog",
      breed: "siberian",
      gender: "Male",
      age: "1-2 years",
      image: siberian,
    },
    {
      type: "Cat",
      breed: "Bombaycat",
      gender: "Female",
      age: "3-5 years",
      image: bombaycat,
    },
    {
      type: "Cat",
      breed: "Britishshorthair",
      gender: "Female",
      age: "1-2 years",
      image: britishshorthair,
    },
    {
      type: "Goat",
      breed: "Jamnapari",
      gender: "Female",
      age: "3-4years",
      image: jamnapari,
    },
    {
      type: "Dog",
      breed: "Labrador",
      gender: "Female",
      age: "3-4 years",
      image: labradorImage,
    },
  ];

  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petAge, setPetAge] = useState("");
  const [filteredPets, setFilteredPets] = useState(petData);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleSearch = () => {
    let filtered = petData;

    if (petType) filtered = filtered.filter((pet) => pet.type === petType);
    if (petBreed) filtered = filtered.filter((pet) => pet.breed === petBreed);
    if (petGender)
      filtered = filtered.filter((pet) => pet.gender === petGender);
    if (petAge) filtered = filtered.filter((pet) => pet.age === petAge);

    setFilteredPets(filtered);
  };

  const handleClear = () => {
    setPetType("");
    setPetBreed("");
    setPetGender("");
    setPetAge("");
    setFilteredPets(petData);
  };

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // Toggle flip
  };

  return (
    <div className="home2-container">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.6 }}
        className="home2-filter"
      >
        <motion.h3
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 2 }}
          className="ms-3 mt-3"
        >
          Find Your New Best Friend
        </motion.h3>
        <motion.div className="row filter-options-row mt-5 pt-5 text-center mx-auto d-flex justify-content-center align-items-start">
          <div className="col-lg-2 filter-options-col col-md-6 col-sm-12 ">
            <div className=" justify-content-start d-flex">
              <div className="px-3 justify-content-center align-items-center d-flex filter-icon">
                <FaDog />
              </div>
              <div className="justify-content-end ms-4" width="100%">
                <p className="justify-content-end">Pet Type</p>

                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option value="">All</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Goat">Goat</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-2 filter-options-col col-md-6 col-sm-12 d-flex">
            <div className="px-3 justify-content-center align-items-center d-flex filter-icon">
              {" "}
              <FaPaw />
            </div>
            <div className="justify-content-end ms-4" width="100%">
              <p>Breed</p>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
              >
                <option value="">All</option>
                {petType === "Dog" && (
                  <>
                    <option value="rotweiler">Rotweiler</option>
                    <option value="bulldog">Bulldog</option>
                    <option value="labrador">Labrador</option>
                    <option value="siberian">siberian</option>
                    <option value="German Shepherd">German Shepherd</option>
                  </>
                )}
                {petType === "Cat" && (
                  <>
                    <option value="Siamese">Siamese</option>
                    <option value="bombaycat">Bombay Cat</option>
                    <option value="britishshorthair">British Shorthair</option>
                  </>
                )}

                {petType === "Goat" && (
                  <>
                    <option value="Boer">Boer</option>
                    <option value="alpinegoat">Alpine Goat</option>
                  </>
                )}
              </select>
            </div>
          </div>
          <div className="col-lg-2 filter-options-col col-md-6 col-sm-12 d-flex">
            <div className="px-3 justify-content-center align-items-center d-flex filter-icon">
              <FaVenusMars />
            </div>
            <div className="justify-content-end ms-4" width="100%">
              <p>Gender</p>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                value={petGender}
                onChange={(e) => setPetGender(e.target.value)}
              >
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 filter-options-col col-md-6 col-sm-12 d-flex ">
            <div className="px-3 justify-content-center align-items-center d-flex filter-icon">
              {" "}
              <FaBirthdayCake />
            </div>
            <div className="justify-content-end ms-4" width="100%">
              <p>Age</p>
              <select
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option value="">All</option>
                <option value="1-2 years">1-2 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="6+ years">6+ years</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 filter-options-col col-md-6 col-sm-12 mt-4  ">
            <button
              className="btn   px-4 mx-2 py-2 px-3"
              onClick={handleSearch}
            >
              Search
            </button>
            <button className="btn  px-4 mx-2 py-2 px-3" onClick={handleClear}>
              Clear
            </button>
          </div>
        </motion.div>

        <div className="row filter-row mt-5 text-center mx-auto">
          {filteredPets.map((pet, index) => (
            <div
              className={`filter-col col-lg-3 col-md-4 col-sm-12 pet-card ${
                flippedIndex === index ? "flipped" : ""
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} // Start small and invisible
                animate={{ scale: 1, opacity: 1 }} // Pop to full size and make visible
                exit={{ scale: 0.5, opacity: 0 }} // Shrink and fade out when exiting
                transition={{ duration: 0.1 }}
                className="pet-card-inner"
              >
                <div className="pet-card-front">
                  <img src={pet.image} alt={pet.breed} className="img-fluid" />
                </div>
                <div className="pet-card-back">
                  <p>
                    <strong>Breed:</strong> {pet.breed}
                  </p>
                  <p>
                    <strong>Gender:</strong> {pet.gender}
                  </p>
                  <p>
                    <strong>Age:</strong> {pet.age}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Section2;

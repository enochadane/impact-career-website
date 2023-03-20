const controller = require("./candidate.controller");
const Candidate = require("../models/Candidates");
const axios = require("axios");
const { pinecone } = require("../db/pinecone");

jest.mock("../models/Candidates");
jest.mock("axios");
jest.mock("../db/pinecone");

describe("addProfile", () => {
  const req = {
    body: {
      skills: ["JavaScript", "React"],
      yearsOfExperience: 2,
      country: "United States",
      workHistory: [
        {
          position: "Frontend Developer",
          description: "Developed web applications",
        },
        { position: "UI Designer", description: "Designed user interfaces" },
      ],
      certifications: [{ name: "Certified JavaScript Developer" }],
      education: [{ degree: "Bachelor's degree in Computer Science" }],
      idealJobDescription:
        "Looking for a challenging role in a fast-paced environment",
    },
  };

  const res = {
    json: jest.fn(),
    status: jest.fn(),
  };

  beforeEach(() => {
    Candidate.mockClear();
    axios.mockClear();
    pinecone.Index.mockClear();
  });

  test("adds a candidate profile and returns the response", async () => {
    const mockResponse = {
      _id: "mock-id",
    };

    const openAIResponse = {
      data: {
        data: [{ embedding: [1, 2, 3] }],
      },
    };

    const upsertResponse = {
      status: 200,
    };

    const mockCandidate = {
      save: jest.fn().mockResolvedValue(mockResponse),
    };

    const mockIndex = {
      upsert: jest.fn().mockResolvedValue(upsertResponse),
    };

    Candidate.mockImplementation(() => mockCandidate);
    axios.mockResolvedValue(openAIResponse);
    pinecone.Index.mockImplementation(() => mockIndex);

    await controller.addProfile(req, res);

    expect(mockCandidate.save).toHaveBeenCalledTimes(1);
    expect(mockIndex.upsert).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockResponse);
    expect(res.status).not.toHaveBeenCalled();
  });
});

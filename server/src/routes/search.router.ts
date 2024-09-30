import express from "express";
const router = express.Router();

import SearchContollers from "../controllers/search.contollers";

router.get("/search/term", SearchContollers.searchTerm);

export default router;

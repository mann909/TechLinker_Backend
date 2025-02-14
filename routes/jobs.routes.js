import express from 'express';
const router = express.Router();
import * as jobController from '../controller/Job.controller.js';
import * as jobValidator from '../validators/job.validator.js';
import auth from '../middlewares/auth.middleware.js';
import trimRequest from 'trim-request';

router.post(
  '/list-job',
  auth,
  trimRequest.all,
  jobValidator.listJobValidator,
  jobController.listJob
);

router.get(
  '/get-jobs',
  auth,
  trimRequest.all,
  jobValidator.validateJobSearch,
  jobController.searchJobs
);

router.delete(
  '/delete-job/:jobId',
  auth,
  trimRequest.all,
  jobValidator.deleteJobValidator,
  jobController.deleteJob
);

export default router;

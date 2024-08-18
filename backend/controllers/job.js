import Job from "../models/job.js";


export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        const totalJobs = jobs.length;
        res.status(200).json({jobs, total: totalJobs});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }

}

export const getJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({error: 'Job not found'});
        }
        res.json(job);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}

export const postJob = async (req, res) => {
    try {
        const {title, description, location, salary, category, company, contact} = req.body;

        const newJob = new Job({
            title,
            description,
            location,
            salary,
            category,
            company,
            contact
        });

        const savedJob = await newJob.save();

        res.status(201).json(savedJob);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server Error'});
    }
}
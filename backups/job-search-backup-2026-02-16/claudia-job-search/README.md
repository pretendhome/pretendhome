# Validate Claudia's Job Search with Perplexity

## Setup

```bash
cd /home/mical/fde/projects/claudia-job-search

# Install requests if needed
pip3 install requests

# Set your Perplexity API key
export PERPLEXITY_API_KEY='your-perplexity-api-key-here'

# Run validation
python3 validate_jobs_perplexity.py
```

## What It Does

Runs 5 Perplexity searches to validate the mock job results:

1. **French American International School** - Current admissions/enrollment openings
2. **Bay Area Independent Schools** - Director of Admissions/Enrollment (Nueva, Synergy, MCDS, Redwood Day)
3. **International Schools Bay Area** - Enrollment roles (ISTP, IB World Schools)
4. **EdJoin** - Bay Area education leadership roles
5. **NAIS Career Center** - Independent school jobs

## Expected Output

For each query, Perplexity will return:
- Current job openings (if any)
- School names
- Job titles
- Posting dates
- Application links

## Next Steps

1. Run the script
2. Compare Perplexity results with mock results in `job_search_results.txt`
3. Update `job_search_results.txt` with actual openings
4. Prioritize real openings for Claudia to apply to

## Note

The mock results are based on typical hiring patterns at Bay Area independent schools. Perplexity will show what's ACTUALLY open right now (February 2026).

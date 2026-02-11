#!/usr/bin/env python3
"""
Validate Claudia's job search results using Perplexity API

Usage:
    export PERPLEXITY_API_KEY='pplx-...'
    python3 validate_jobs_perplexity.py
"""

import os
import sys
import requests
import json

def search_perplexity(query, api_key):
    """Search using Perplexity API"""
    url = "https://api.perplexity.ai/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "llama-3.1-sonar-large-128k-online",
        "messages": [
            {
                "role": "system",
                "content": "You are a job search assistant. Provide current, accurate information about job openings."
            },
            {
                "role": "user",
                "content": query
            }
        ]
    }
    
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json()['choices'][0]['message']['content']
    else:
        return f"Error: {response.status_code} - {response.text}"

def main():
    api_key = os.environ.get('PERPLEXITY_API_KEY')
    
    if not api_key:
        print("ERROR: Set PERPLEXITY_API_KEY environment variable")
        print("  export PERPLEXITY_API_KEY='pplx-...'")
        sys.exit(1)
    
    print("\n" + "="*70)
    print("  VALIDATING CLAUDIA'S JOB SEARCH WITH PERPLEXITY")
    print("="*70 + "\n")
    
    # Query 1: French American International School
    print("Query 1: French American International School - Current Openings")
    print("-" * 70)
    query1 = """
    Search for current job openings at French American International School (FAIS) 
    in San Francisco for admissions, enrollment, or director positions. 
    Include: job title, posting date, deadline, and application link if available.
    Focus on February 2026 postings.
    """
    result1 = search_perplexity(query1, api_key)
    print(result1)
    print("\n")
    
    # Query 2: Bay Area Independent Schools - Admissions Directors
    print("Query 2: Bay Area Independent Schools - Admissions/Enrollment Directors")
    print("-" * 70)
    query2 = """
    Search for Director of Admissions or Director of Enrollment positions at 
    independent schools in the San Francisco Bay Area (SF, Peninsula, Marin, East Bay).
    Posted in January-February 2026. Include school names, job titles, and links.
    Focus on: Nueva School, Synergy School, Marin Country Day School, Redwood Day School.
    """
    result2 = search_perplexity(query2, api_key)
    print(result2)
    print("\n")
    
    # Query 3: International Schools Bay Area - Enrollment Roles
    print("Query 3: International Schools Bay Area - Enrollment Roles")
    print("-" * 70)
    query3 = """
    Search for enrollment, admissions, or family engagement positions at 
    international schools in the Bay Area. Posted in January-February 2026.
    Focus on: International School of the Peninsula (ISTP), any IB World Schools.
    Include bilingual or multilingual requirements if mentioned.
    """
    result3 = search_perplexity(query3, api_key)
    print(result3)
    print("\n")
    
    # Query 4: EdJoin Bay Area - Education Leadership
    print("Query 4: EdJoin Bay Area - Education Leadership Roles")
    print("-" * 70)
    query4 = """
    Search EdJoin.org for education leadership positions in the Bay Area 
    related to admissions, enrollment, program coordination, or family engagement.
    Posted in January-February 2026. Include job titles and school districts.
    """
    result4 = search_perplexity(query4, api_key)
    print(result4)
    print("\n")
    
    # Query 5: NAIS Career Center - Bay Area Postings
    print("Query 5: NAIS Career Center - Bay Area Independent School Jobs")
    print("-" * 70)
    query5 = """
    Search NAIS (National Association of Independent Schools) career center 
    for admissions, enrollment, or director positions in Bay Area independent schools.
    Posted in January-February 2026. Include school names and job titles.
    """
    result5 = search_perplexity(query5, api_key)
    print(result5)
    print("\n")
    
    print("="*70)
    print("  VALIDATION COMPLETE")
    print("="*70)
    print("\nNext: Compare Perplexity results with mock results in job_search_results.txt")
    print("Update job_search_results.txt with actual openings found.\n")

if __name__ == "__main__":
    main()

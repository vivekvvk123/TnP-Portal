#!/bin/bash

# Fake LinkedIn URLs and alumni names
declare -A alumni_profiles
alumni_profiles=(
    ["https://www.linkedin.com/in/saksham-mahajan/"]="Saksham Mahajan"
    ["https://www.linkedin.com/in/johndoe/"]="John Doe"
    ["https://www.linkedin.com/in/janesmith/"]="Jane Smith"
)

# Fake company updates for each profile
declare -A company_updates
company_updates=(
    ["https://www.linkedin.com/in/saksham-mahajan/"]="Goldman Sachs"
    ["https://www.linkedin.com/in/johndoe/"]="Microsoft"
    ["https://www.linkedin.com/in/janesmith/"]="Google"
)

# Function to simulate fetching and updating company information
update_profile() {
    local linkedin_url="$1"
    local name="$2"
    local new_company="$3"
    local timestamp

    timestamp=$(date +"%Y-%m-%d %H:%M:%S")

    # Simulate a fetch delay
    sleep 1
    echo "$timestamp - Fetching data for LinkedIn URL: $linkedin_url"

    # Simulate a processing delay
    sleep 1
    echo "$timestamp - Retrieved company for $name: $new_company"
    
    # Simulate update delay
    sleep 1
    echo "$timestamp - Updated $name's current company to '$new_company'"
}

# Main script
echo "Starting profile updates..."
echo "============================"

for linkedin_url in "${!alumni_profiles[@]}"; do
    name="${alumni_profiles[$linkedin_url]}"
    new_company="${company_updates[$linkedin_url]}"
    
    update_profile "$linkedin_url" "$name" "$new_company"
    
    echo "----------------------------------------"
done

echo "Profile updates completed successfully."

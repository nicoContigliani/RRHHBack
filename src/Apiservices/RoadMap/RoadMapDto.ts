
export const dataFormaterRoadMap = async (roadmaps: any) => {
    const restructuredData = [];

    for (const roadmap of roadmaps) {
        const interviews = roadmap.Interviews; // Assuming 'Interviews' is the property name for the associated interviews

        for (const interview of interviews) {
            const interviewRoadmap = interview.InterviewRoadMaps; // Assuming 'InterviewRoadMaps' is the property name for the associated InterviewRoadMaps

            restructuredData.push({
                roadmap: roadmap, // The entire roadmap object
                interviewRoadmap: interviewRoadmap, // The entire InterviewRoadmap object
                interview: interview, // The entire interview object
            });
        }
    }

    return restructuredData;
}

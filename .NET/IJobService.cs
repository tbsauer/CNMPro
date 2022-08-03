using Sabio.Models.Domain.Jobs;
using Sabio.Models.Requests.Jobs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Interfaces
{
    public interface IJobService
    {
        int AddJob(JobAddRequest model, int id);
        Job GetJobById(int id);
        Paged<Job> GetSearchedJobs(int pageIndex, int pageSize, string query);
        Paged<Job> SelectJobByCreatedBy(int CreatedBy, int pageIndex, int pageSize);
        Paged<Job> SelectAll(int pageIndex, int pageSize);
        void Update(JobUpdateRequest model);
        void DeleteJobById(int id);
    }
}

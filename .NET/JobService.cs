using Sabio.Data;
using Sabio.Data.Providers;
using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Domain.Jobs;
using Sabio.Models.Domain.Organizations;
using Sabio.Models.Interfaces;
using Sabio.Models.Requests;
using Sabio.Models.Requests.Jobs;
using Sabio.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Services
{
    public class JobService : IJobService
    {
        IDataProvider _data = null;
        IUserProfileMapper _profileMapper = null;
        ILookUpService _lookUp = null;
        public JobService(IDataProvider data, IUserProfileMapper profileMapper, ILookUpService lookUp)
        {
            _data = data;
            _profileMapper = profileMapper;
            _lookUp = lookUp;
        }

        public int AddJob(JobAddRequest model, int id)
        {
            id = 0;

            string procName = "[dbo].[Jobs_InsertV2]";
            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {

                    col.AddWithValue("@JobTypeId", model.JobTypeId);
                    col.AddWithValue("@LocationId", model.LocationId);
                    col.AddWithValue("@LocationTypeId", model.LocationTypeId);
                    col.AddWithValue("@LineOne", model.LineOne);
                    col.AddWithValue("@LineTwo", model.LineTwo);
                    col.AddWithValue("@City", model.City);
                    col.AddWithValue("@Zip", model.Zip);
                    col.AddWithValue("@StateId", model.StateId);
                    col.AddWithValue("@Latitude", model.Latitude);
                    col.AddWithValue("@Longitude", model.Longitude);
                    col.AddWithValue("@OrganizationId", model.OrganizationId);
                    col.AddWithValue("@OrganizationTypeId", model.OrganizationTypeId);
                    col.AddWithValue("@Name", model.Name);
                    col.AddWithValue("@Headline", model.Headline);
                    col.AddWithValue("@OrgDescription", model.OrgDescription);
                    col.AddWithValue("@Logo", model.Logo);
                    col.AddWithValue("@Phone", model.Phone);
                    col.AddWithValue("@SiteUrl", model.SiteUrl);
                    col.AddWithValue("@Title", model.Title);
                    col.AddWithValue("@Description", model.Description);
                    col.AddWithValue("@Requirements", model.Requirements);
                    col.AddWithValue("@IsActive", model.IsActive);
                    col.AddWithValue("@ContactName", model.ContactName);
                    col.AddWithValue("@ContactPhone", model.ContactPhone);
                    col.AddWithValue("@ContactEmail", model.ContactEmail);
                    col.AddWithValue("@CreatedBy", model.CreatedBy);
                    col.AddWithValue("@ModifiedBy", model.ModifiedBy);
                    SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);
                    idOut.Direction = ParameterDirection.Output;

                    col.Add(idOut);
                },
                returnParameters: delegate (SqlParameterCollection returnCollection)
                {
                    object oId = returnCollection["@Id"].Value;
                    int.TryParse(oId.ToString(), out id);

                });

            return id;
        }
        public Job GetJobById(int id)
        {
            Job job = null;
            string procName = "[dbo].[Jobs_SelectById]";

            _data.ExecuteCmd(procName, delegate (SqlParameterCollection parameterCollection)
            {
                parameterCollection.AddWithValue("@Id", id);

            }, delegate (IDataReader reader, short set)
            {
                int startingIndex = 0;
                job = MapSingleJob(reader, ref startingIndex);
            });

            return job;
        }

        public Paged<Job> SelectJobByCreatedBy(int createdBy, int pageIndex, int pageSize)
        {
            Paged<Job> pagedList = null;
            List<Job> list = null;
            int totalCount = 0;
            string procName = "[dbo].[Jobs_Select_ByCreatedBy]";

            _data.ExecuteCmd(procName, delegate (SqlParameterCollection parameterCollection)
            {
                parameterCollection.AddWithValue("@pageIndex", pageIndex);
                parameterCollection.AddWithValue("@pageSize", pageSize);
                parameterCollection.AddWithValue("@CreatedBy", createdBy);


            }, delegate (IDataReader reader, short set)
            {

                int startingIndex = 0;
                Job job = MapSingleJob(reader, ref startingIndex);
                totalCount = reader.GetSafeInt32(startingIndex++);

                if (totalCount == 0)
                {
                    totalCount = reader.GetSafeInt32(startingIndex++);
                }

                if (list == null)
                {
                    list = new List<Job>();
                }

                list.Add(job);
            });
            if (list != null)
            {
                pagedList = new Paged<Job>(list, pageIndex, pageSize, totalCount);
            }
            return pagedList;
        }
        public Paged<Job> SelectAll(int pageIndex, int pageSize)
        {
            Paged<Job> pagedList = null;
            List<Job> list = null;
            int totalCount = 0;
            string procName = "[dbo].[Jobs_SelectAll]";

            _data.ExecuteCmd(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@PageIndex", pageIndex);
                paramCollection.AddWithValue("@PageSize", pageSize);
            }, delegate (IDataReader reader, short set)
            {

                int startingIndex = 0;
                Job job = MapSingleJob(reader, ref startingIndex);
                totalCount = reader.GetSafeInt32(startingIndex++);

                if (totalCount == 0)
                {
                    totalCount = reader.GetSafeInt32(startingIndex++);
                }

                if (list == null)
                {
                    list = new List<Job>();
                }

                list.Add(job);
            });
            if (list != null)
            {
                pagedList = new Paged<Job>(list, pageIndex, pageSize, totalCount);
            }
            return pagedList;
        }

        public Paged<Job> GetSearchedJobs(int pageIndex, int pageSize, string query)
        {
            Paged<Job> pagedList = null;
            List<Job> list = null;
            int totalCount = 0;

            _data.ExecuteCmd(
                "[dbo].[Jobs_Search_Pagination]"
                , (param) =>

                {
                    param.AddWithValue("@PageIndex", pageIndex);
                    param.AddWithValue("@PageSize", pageSize);
                    param.AddWithValue("@Query", query);
                },
                (reader, recordSetIndex) =>
                {
                    int startingIndex = 0;
                    Job job = MapSingleJob(reader, ref startingIndex);

                    if (totalCount == 0)
                    {
                        totalCount = reader.GetSafeInt32(startingIndex++);
                    }

                    if (list == null)
                    {
                        list = new List<Job>();
                    }

                    list.Add(job);
                });
            if (list != null)
            {
                pagedList = new Paged<Job>(list, pageIndex, pageSize, totalCount);
            }
            return pagedList;
        }

        public void Update(JobUpdateRequest model)
        {
            string procName = "[dbo].[Jobs_Update]";
            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    col.AddWithValue("@Id", model.Id);
                    AddCommonParams(model, col);
                }, returnParameters: null);
        }
        public void DeleteJobById(int id)
        {
            string procName = "[dbo].[Jobs_Delete_ById]";

            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    col.AddWithValue("@id", id);
                }, returnParameters: null);

        }


        private Job MapSingleJob(IDataReader reader, ref int startingIndex)
        {
            Job job = new Job();
            job.Id = reader.GetSafeInt32(startingIndex++);
            job.JobType = _lookUp.MapSingleLookUp(reader, ref startingIndex);
            job.Title = reader.GetSafeString(startingIndex++);
            job.Description = reader.GetSafeString(startingIndex++);
            job.Requirements = reader.GetSafeString(startingIndex++);
            job.Location = new Location();
            job.Location.Id = reader.GetSafeInt32(startingIndex++);
            job.Location.LocationType = _lookUp.MapSingleLookUp(reader, ref startingIndex);
            job.Location.LineOne = reader.GetSafeString(startingIndex++);
            job.Location.LineTwo = reader.GetSafeString(startingIndex++);
            job.Location.City = reader.GetSafeString(startingIndex++);
            job.Location.Zip = reader.GetSafeString(startingIndex++);
            job.Location.State = new State();
            job.Location.State.Id = reader.GetSafeInt32(startingIndex++);
            job.Location.State.Name = reader.GetSafeString(startingIndex++);
            job.Location.State.Code = reader.GetSafeString(startingIndex++);
            job.Location.Latitude = reader.GetSafeDouble(startingIndex++);
            job.Location.Longitude = reader.GetSafeDouble(startingIndex++);
            job.Organization = new Organization();
            job.Organization.Id = reader.GetSafeInt32(startingIndex++);
            job.Organization.OrganizationType = _lookUp.MapSingleLookUp(reader, ref startingIndex);
            job.Organization.Name = reader.GetSafeString(startingIndex++);
            job.Organization.Headline = reader.GetSafeString(startingIndex++);
            job.Organization.Description = reader.GetSafeString(startingIndex++);
            job.Organization.Logo = reader.GetSafeString(startingIndex++);
            job.Organization.Phone = reader.GetSafeString(startingIndex++);
            job.Organization.SiteUrl = reader.GetSafeString(startingIndex++);
            job.CreatedBy = _profileMapper.Map(reader, ref startingIndex);
            job.DateCreated = reader.GetSafeDateTime(startingIndex++);
            job.DateModified = reader.GetSafeDateTime(startingIndex++);

            return job;
        }
        private static void AddCommonParams(JobAddRequest model, SqlParameterCollection col)
        {
            col.AddWithValue("@JobTypeId", model.JobTypeId);
            col.AddWithValue("@LocationId", model.LocationId);
            col.AddWithValue("@OrganizationId", model.OrganizationId);
            col.AddWithValue("@Title", model.Title);
            col.AddWithValue("@Description", model.Description);
            col.AddWithValue("@Requirements", model.Requirements);
            col.AddWithValue("@IsActive", model.IsActive);
            col.AddWithValue("@ContactName", model.ContactName);
            col.AddWithValue("@ContactPhone", model.ContactPhone);
            col.AddWithValue("@ContactEmail", model.ContactEmail);
            col.AddWithValue("@UserId", model.CreatedBy);

        }
    }
}

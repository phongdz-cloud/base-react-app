import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
  //submit data
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", username);
  form.append("role", role);
  form.append("userImage", image);

  return axios.post("api/v1/participant", form);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  //submit data
  const form = new FormData();
  form.append("id", id);
  form.append("username", username);
  form.append("role", role);
  form.append("userImage", image);

  return axios.put("api/v1/participant", form);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email, password });
};

const postRegister = (email, password, username) => {
  return axios.post("api/v1/register", { email, password, username });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

const getDataQuiz = (id) => {
  return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  return axios.post("/api/v1/quiz-submit", { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, quizImage) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.post("api/v1/quiz", data);
};

const getAllQuizForAdmin = () => {
  return axios.get("/api/v1/quiz/all");
};

const deleteQuizByIdForAdmin = (quizId) => {
  return axios.delete(`/api/v1/quiz/${quizId}`);
};

const putUpdateQuiz = (id, description, name, difficulty, quizImage) => {
  const data = new FormData();
  data.append("id", id);
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", quizImage);
  return axios.put("api/v1/quiz", data);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, quizImage) => {
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", quizImage);
  return axios.post("api/v1/question", data);
};

const postCreateNewAnswerForQuestion = (
  question_id,
  description,
  correct_answer
) => {
  return axios.post("api/v1/answer", {
    question_id,
    description,
    correct_answer,
  });
};

const postAssignQuiz = (quizId, userId) => {
  return axios.post("api/v1/quiz-assign-to-user", {
    quizId,
    userId,
  });
};

const getQuizWithQA = (quizId) => {
  return axios.get(`api/v1/quiz-with-qa/${quizId}`);
};

const postUpsertQA = (data) => {
  return axios.post("api/v1/quiz-upsert-qa", { ...data });
};

const logout = (email, refresh_token) => {
  return axios.post("api/v1/logout", { email, refresh_token });
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  deleteQuizByIdForAdmin,
  putUpdateQuiz,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
  logout,
};

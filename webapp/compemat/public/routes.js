const routes = {
  course: "/course",
  exercises: "/exercises",
  classes: "/classes/section-0/1",
  about: "/about",
  profile: "/profile",
  exercisesCategory: (category) => `/exercises/${category}`,
  exercisesPage: (id) => `/exercises/${id}/details`,
};

export default routes;

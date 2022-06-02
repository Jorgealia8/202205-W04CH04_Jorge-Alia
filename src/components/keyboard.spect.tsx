describe('Given the component Keyboard', () => { 
    describe('', () => { second })



 })



describe("Given the component Task", () => {
  const mockTask = {
    id: 1,
    title: "test 1",
    responsible: "resp 1",
    isComplete: false,
  };

  const mockDeleteFunction = jest.fn();
  const mockToggleComplete = jest.fn();

  describe("When calling it with a task", () => {
    test("Then it should be rendered", () => {
      // Arrange
      render(<Task task={mockTask} />);

      // Assert
      expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    });
  });
# scripting implementation
File.read!("items.txt")
|> String.split("\n\n")             # split contents of file into groups 
|> Enum.map(fn e ->                 # iterate over each group, and apply transformation to lines in group
  e 
  |> String.split("\n")
  |> Enum.map(&String.to_integer/1)
  |> Enum.sum()
  end
)
|> Enum.max()
|> IO.puts()


# module implementation
defmodule MyModule do
  def process_file(file_path) do
    file_content = read_file(file_path)
    groups = split_into_groups(file_content)
    sums = calculate_sums(groups)
    max_sum = find_max_sum(sums)
    print_result(max_sum)
  end

  defp read_file(file_path) do
    File.read!("#{file_path}")
  end

  defp split_into_groups(content) do
    content
    |> String.split("\n\n", trim: true)
  end

  defp calculate_sums(groups) do
    groups
    |> Enum.map(&sum_group/1)
  end

  defp sum_group(group) do
    group
    |> String.split("\n")
    |> Enum.map(&String.to_integer/1)
    |> Enum.sum()
  end

  defp find_max_sum(sums) do
    sums
    |> Enum.max()
  end

  defp print_result(result) do
    IO.puts(result)
  end
end

MyModule.process_file("items.txt")


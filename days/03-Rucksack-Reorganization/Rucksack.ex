defmodule Rucksack do
  @range_lowercase hd('a')..hd('z')
  @range_uppercase hd('A')..hd('Z')

  def parse_input_to_list(file_name) do
    File.read!(file_name)
    |> String.split("\n")
  end

  def split_and_find_match(data, priorities_list) do
    Enum.map(data, fn s ->
      len = String.length(s)
      mid = div(len, 2)

      compartment_1 = String.slice(s, 0, mid) |> String.to_charlist() |> MapSet.new()
      compartment_2 = String.slice(s, mid, mid) |> String.to_charlist() |> MapSet.new()

      common_item =
        MapSet.intersection(compartment_1, compartment_2)
        |> MapSet.to_list()
        |> hd()

      # add one for the zero based index
      Enum.find_index(priorities_list, fn x -> x == common_item end) + 1
    end)
  end

  def part_one() do
    file_name = "input.txt"
    priorities_list = Enum.to_list(@range_lowercase) ++ Enum.to_list(@range_uppercase)

    parse_input_to_list(file_name)
    |> split_and_find_match(priorities_list)
    |> Enum.sum()
  end
end

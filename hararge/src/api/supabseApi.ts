"use client";
import { supabase } from "@/lib/supabase";

export type MemberData = {
  fullName: string;
  phone: string;
  year: string;
  campus: string;
  department: string;
};

export async function createMember(data: MemberData) {
  const { fullName, phone, year, campus, department } = data;

  if (!fullName || !phone || !year || !campus || !department) {
    throw new Error("All fields are required");
  }

  const { data: existingMember, error: fetchError } = await supabase
    .from("members")
    .select("*")
    .or(`phone.eq.${phone}`)
    .maybeSingle();

  if (fetchError) throw new Error(fetchError.message);
  if (existingMember) {
    throw new Error("Member already registered with this  phone");
  }

  const { data: member, error: insertError } = await supabase
    .from("members")
    .insert([
      {
        fullName,
        phone,
        year,
        department,
        campus,
      },
    ])
    .select()
    .single();

  if (insertError) throw new Error(insertError.message);

  return member;
}

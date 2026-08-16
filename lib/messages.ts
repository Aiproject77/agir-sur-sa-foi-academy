import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

function sb() {
  return createClient(supabaseUrl, supabaseKey);
}

export interface Message {
  id: string;
  student_id: string;
  student_name: string;
  student_email: string;
  course_title: string;
  chapter_title: string;
  subject: string;
  body: string;
  reply: string | null;
  read_by_admin: boolean;
  replied_at: string | null;
  created_at: string;
}

export const MessageStore = {
  async create(data: Omit<Message, "id" | "reply" | "read_by_admin" | "replied_at" | "created_at">): Promise<Message> {
    const { data: row, error } = await sb()
      .from("messages")
      .insert(data)
      .select()
      .single();
    if (error) throw new Error(error.message);
    return row;
  },

  async getForStudent(studentId: string): Promise<Message[]> {
    const { data } = await sb()
      .from("messages")
      .select("*")
      .eq("student_id", studentId)
      .order("created_at", { ascending: false });
    return data || [];
  },

  async getAll(): Promise<Message[]> {
    const { data } = await sb()
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    return data || [];
  },

  async getUnreadCount(): Promise<number> {
    const { count } = await sb()
      .from("messages")
      .select("*", { count: "exact", head: true })
      .eq("read_by_admin", false);
    return count || 0;
  },

  async markRead(id: string): Promise<void> {
    await sb().from("messages").update({ read_by_admin: true }).eq("id", id);
  },

  async reply(id: string, reply: string): Promise<void> {
    await sb()
      .from("messages")
      .update({ reply, replied_at: new Date().toISOString(), read_by_admin: true })
      .eq("id", id);
  },
};

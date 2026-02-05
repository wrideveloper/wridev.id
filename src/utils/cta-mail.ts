export type TalentRequestData = {
  companyName: string;
  email: string;
  proficiency: string;
  description: string;
};

export type ApiResponse = {
  success: boolean;
  error?: string;
};

/**
 * Sends a talent request to the Cloudflare Worker.
 * * @param data - The form data to send
 * @returns Promise<ApiResponse>
 */
export async function sendTalentRequest(
  data: TalentRequestData,
): Promise<ApiResponse> {
  const WORKER_URL = import.meta.env.CTA_WORKER_URL;
  const API_TOKEN = import.meta.env.CTA_PUBLIC_API_TOKEN;

  if (!WORKER_URL || !API_TOKEN) {
    console.error(
      "Missing configuration: WORKER_URL or PUBLIC_API_TOKEN is not set.",
    );
    return { success: false, error: "Configuration Error" };
  }

  try {
    const response = await fetch(`${WORKER_URL}/talent-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Try to parse the error message from the worker
      const errorData = (await response.json()) as ApiResponse;
      throw new Error(
        errorData.error || `HTTP error! status: ${response.status}`,
      );
    }

    return (await response.json()) as ApiResponse;
  } catch (err) {
    console.error("Failed to send email:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown network error",
    };
  }
}

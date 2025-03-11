using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationTester : MonoBehaviour
{
    Animator animator;
    bool isJumping = false; // ジャンプ中かどうか

    void Start()
    {
        animator = GetComponent<Animator>(); // Animatorコンポーネントを取得
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.W)) // Wキーで歩行アニメーション
        {
            animator.Play("Walk"); // Walk は Animator に設定したステート名
        }
        else if (Input.GetKeyDown(KeyCode.S)) // Sキーで待機アニメーション
        {
            animator.Play("Idle"); // Idle は待機アニメーションのステート名
        }
        else if (Input.GetKeyDown(KeyCode.Space) && !isJumping) // スペースキーでジャンプアニメーション
        {
            isJumping = true; // ジャンプ開始
            animator.Play("Jump"); // Jump はジャンプアニメーションのステート名
            StartCoroutine(WaitForJumpAnimation(0.3f, 1f)); // 0.5秒待ってから0.5秒かけてジャンプ
        }
        else if (Input.GetKeyDown(KeyCode.B))
        { // Bキーでバイバイアニメーション
            animator.Play("Baybay"); // Baybay はバイバイアニメーションのステート名
            //バイバイのためにy軸の回転を入れる
            transform.Rotate(0, 20, 0);
        }
    }

    IEnumerator WaitForJumpAnimation(float jumpAnimationTime, float jumpMoveTime)
    {
        yield return new WaitForSeconds(jumpAnimationTime); // 0.5秒待ってからジャンプ開始
        yield return StartCoroutine(SmoothJump(jumpMoveTime)); // 滑らかにジャンプ移動
    }

    IEnumerator SmoothJump(float jumpTime)
    {
        Vector3 startPos = transform.position;
        Vector3 endPos = startPos + new Vector3(1, 1, 0); // 斜め前（右前方向）に移動
        float elapsedTime = 0f;

        while (elapsedTime < jumpTime)
        {
            float t = elapsedTime / jumpTime; // 0.0 → 1.0 へ変化
            transform.position = Vector3.Lerp(startPos, endPos, EaseOutQuad(t)); // 補間して滑らかに移動
            elapsedTime += Time.deltaTime;
            yield return null;
        }

        transform.position = endPos; // 最終位置を設定

        yield return new WaitForSeconds(0.5f); // 着地待ち
        isJumping = false; // ジャンプ終了
    }

    // イージング関数（EaseOutQuad）
    float EaseOutQuad(float t)
    {
        return 1 - (1 - t) * (1 - t);
    }
}
